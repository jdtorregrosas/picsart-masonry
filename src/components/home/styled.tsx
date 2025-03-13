import styled from "styled-components";
import { Button } from "../styled";

export const StyledPhotoGallery = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const StyledMasonryGrid = styled.div`
  position: relative;
  column-count: 1;
  column-gap: 16px;

  @media (min-width: 600px) {
    column-count: 2;
  }

  @media (min-width: 900px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }

  &:after {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 700px;
    width: 100%;
    position: absolute;
    background: linear-gradient(0deg, #242424 50%, #24242400 100%);
    pointer-events: none;
  }
`;

export const StyledPhotoItem = styled.div`
  break-inside: avoid; /* Prevent item breaking across columns */
  margin-bottom: 15px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 1);
  filter: brightness(80%);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    filter: brightness(100%);
  }

  & > p {
    padding-left: 16px;
    color: #242424aa;
    font-weight: 600;
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
  border: none;
  margin: 30px auto;
  padding: 12px 30px;
  border-radius: 12px 0 0 12px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const StyledSearchFormButton = styled(Button)`
  border-radius: 0 12px 12px 0;
`;

export const StyledLoadMoreButton = styled(Button)`
  position: relative;
  margin-top: -300px;
`;

export const StyledLoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

export const StyledTitle = styled.h1``;
