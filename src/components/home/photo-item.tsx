import { NavLink } from "react-router";

import { Photo } from "../../models/photo.model";
import { StyledPhotoImage, StyledPhotoItem } from "./styled";

interface Props {
  photo: Photo;
}
export const PhotoItem = ({ photo }: Props) => {
  return (
    <NavLink to={`/photo/${photo.id}`}>
      <StyledPhotoItem key={photo.id}>
        <StyledPhotoImage
          src={photo.src.medium}
          alt={photo.alt}
          loading="lazy"
        />
      </StyledPhotoItem>
    </NavLink>
  );
};
