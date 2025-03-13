import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { PhotosService } from "../../services/photos-service";

import { Photo } from "../../models/photo.model";
import { PhotoItem } from "./photo-item";
import {
  StyledLoadMoreButton,
  StyledLoadingMessage,
  StyledMasonryGrid,
  StyledPhotoGallery,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchInput,
} from "./styled";

export const MasonryGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [visiblePhotos, setVisiblePhotos] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observersRef = useRef<Map<string, IntersectionObserver>>(new Map());
  const photosService = useRef(new PhotosService());

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const newPhotos = await photosService.current.fetchAll(
          searchQuery,
          page
        );

        if (page === 1) {
          setPhotos(newPhotos);
        } else {
          setPhotos((prev) => [...prev, ...newPhotos]);
        }

        setHasMore(newPhotos.length > 0);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch photos:", error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [searchQuery, page]);

  const setupObserver = useCallback((id: string, node: HTMLElement) => {
    if (observersRef.current.has(id)) {
      const oldObserver = observersRef.current.get(id);
      oldObserver?.disconnect();
      observersRef.current.delete(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisiblePhotos((prev) => new Set(prev).add(id));
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "200px 0px", // 200px buffer above and below viewport
        threshold: 0.1, // 10% of the item must be visible
      }
    );

    observer.observe(node);
    observersRef.current.set(id, observer);
  }, []);

  // Cleanup observers on unmount
  useEffect(() => {
    return () => {
      observersRef.current.forEach((observer) => observer.disconnect());
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observersRef.current.clear();
    };
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      search: HTMLInputElement;
    };
    const query = formElements.search.value.trim();
    if (query) {
      setSearchQuery(query);
      setPage(1);
      setVisiblePhotos(new Set());
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <StyledPhotoGallery>
      <StyledSearchForm onSubmit={handleSearch}>
        <StyledSearchInput
          type="text"
          name="search"
          placeholder="Search for photos..."
          defaultValue={searchQuery}
        />
        <StyledSearchFormButton type="submit">Search</StyledSearchFormButton>
      </StyledSearchForm>
      <StyledMasonryGrid>
        {photos?.map((photo) => (
          <div
            key={photo.id}
            ref={(node) => {
              if (node) setupObserver(photo.id.toString(), node);
            }}
            style={{
              minHeight: "100px", // Placeholder height until loaded
              width: "100%",
              breakInside: "avoid",
            }}
          >
            {visiblePhotos.has(photo.id.toString()) && (
              <PhotoItem photo={photo} />
            )}
          </div>
        ))}
      </StyledMasonryGrid>

      {loading && (
        <StyledLoadingMessage>Loading photos...</StyledLoadingMessage>
      )}

      {!loading && hasMore && (
        <StyledLoadMoreButton onClick={loadMore}>
          Load More
        </StyledLoadMoreButton>
      )}
    </StyledPhotoGallery>
  );
};
