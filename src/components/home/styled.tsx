import styled from "styled-components";

export const StyledPhotoGallery = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const StyledMasonryGrid = styled.div`
  column-count: 1;
  column-gap: 15px;

  @media (min-width: 600px) {
    column-count: 2;
  }

  @media (min-width: 900px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }
`;

export const StyledPhotoItem = styled.div`
  break-inside: avoid; /* Prevent item breaking across columns */
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transform: translateZ(0); /* Hardware acceleration */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledPhotoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 20px auto;
`;

export const StyledSearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
`;

export const StyledSearchFormButton = styled.button`
  padding: 10px 20px;
  background: #05a081;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

export const StyledLoadMoreButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 30px;
  background: #05a081;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #048a6e;
  }
`;

export const StyledLoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
`;
