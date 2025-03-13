import { useEffect, useState } from "react";
import { useParams } from "react-router";

import {
  StyledDetailImageContainer,
  StyledDetailInfo,
  StyledPhotoDetailWrapper,
} from "../components/photo-detail/styled";
import { Photo } from "../models/photo.model";
import { PhotosService } from "../services/photos-service";

export const PhotoDetail = () => {
  const { id = "" } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);
  useEffect(() => {
    const getPhotoData = async () => {
      const photosService = new PhotosService();
      const photoData = await photosService.fetchSingle(id);
      setPhoto(photoData);
      console.log("photoData", photoData);
    };

    getPhotoData();
  }, [id]);
  return (
    photo && (
      <StyledPhotoDetailWrapper>
        <StyledDetailImageContainer>
          <img src={photo.src.large} alt={photo.alt} />
        </StyledDetailImageContainer>
        <StyledDetailInfo>
          <h3>{photo.alt}</h3>
          <p>Photo by {photo.photographer}</p>
          <div>
            <span>
              Dimensions: {photo.width} x {photo.height}
            </span>
          </div>
        </StyledDetailInfo>
      </StyledPhotoDetailWrapper>
    )
  );
};
