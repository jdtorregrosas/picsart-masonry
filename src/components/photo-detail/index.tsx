import { useMemo } from "react";
import { Photo } from "../../models/photo.model";
import { StyledLink } from "../styled";
import {
  StyledDescription,
  StyledDetailImageContainer,
  StyledDetailInfo,
  StyledPhotoDetailWrapper,
} from "./styled";

export const PhotoDetail = ({ photo }: { photo: Photo }) => {
  const orientation = useMemo(
    () => (photo.height > photo.width ? "vertical" : "horizontal"),
    [photo.width, photo.height]
  );

  return (
    <>
      <StyledLink to="/">⇇ Go Back home</StyledLink>
      <StyledPhotoDetailWrapper>
        <StyledDetailImageContainer orientation={orientation}>
          <img src={photo.src.large} alt={photo.alt} />
        </StyledDetailImageContainer>
        <StyledDetailInfo orientation={orientation}>
          <StyledDescription>{photo.alt}</StyledDescription>
          <p>Photo by {photo.photographer}</p>
          <div>
            Dimensions: {photo.width} x {photo.height}
          </div>
        </StyledDetailInfo>
      </StyledPhotoDetailWrapper>
    </>
  );
};
