import styled from "styled-components";

interface OrientationProps {
  orientation: "horizontal" | "vertical";
}

export const StyledPhotoDetailWrapper = styled.div`
  display: grid;
  gap: 16px;

  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const StyledDetailImageContainer = styled.div<OrientationProps>`
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  border-radius: 24px;
  grid-column: 1 / span 4;
  order: 2;

  @media (min-width: 600px) {
    order: 1;
  }

  ${({ orientation }) =>
    orientation === "horizontal"
      ? `
  @media (min-width: 600px) {
    grid-column: 1 / span 6;
  }
  @media (min-width: 750px) {
    grid-column: 1 / span 5;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / span 8;
  }
  `
      : `
  @media (min-width: 600px) {
    grid-column: 1 / span 3;
  }

  @media (min-width: 750px) {
    grid-column: 1 / span 3;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / span 4;
  }
  
  `}

  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const StyledDetailInfo = styled.div<OrientationProps>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 4;
  width: 100%;
  order: 1;

  @media (min-width: 600px) {
    order: 2;
  }

  ${({ orientation }) =>
    orientation === "horizontal"
      ? `
  @media (min-width: 600px) {
    grid-column: 1 / span 4;
  }
  @media (min-width: 750px) {
    grid-column: 6 / span 3;
  }

  @media (min-width: 1200px) {
    grid-column: 9 / span 4;
  }
  `
      : `
  @media (min-width: 600px) {
    grid-column: 4 / span 3;
  }

  @media (min-width: 750px) {
    grid-column: 4 / span 4;
  }

  @media (min-width: 1200px) {
    grid-column: 5 / span 4;
  }
  `}
`;

export const StyledDescription = styled.h3`
  display: flex;
  flex-direction: column;
`;
