import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { PhotoDetail } from "../components/photo-detail";
import { Photo } from "../models/photo.model";
import { PhotosService } from "../services/photos-service";

export const PhotoDetailPage = () => {
  const { id = "" } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const getPhotoData = async () => {
      const photosService = new PhotosService();
      const photoData = await photosService.fetchSingle(id);
      setPhoto(photoData);
    };

    getPhotoData();
  }, [id]);

  return photo && <PhotoDetail photo={photo} />;
};
