import styled from "styled-components";

export const StyledLayoutWrapper = styled.main`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px 32px 64px 32px;
  overflow: hidden;
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  min-height: 80px;
  box-shadow: 0 1px 0 0 #e9e9e9;
  background: #242424;
  z-index: 10;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderTitle = styled.h1`
  color: #c209c1;
  margin: 0;
`;

export const StyledHeaderSubtitle = styled.p`
  color: #e9e9e9;
  margin: 0;
`;

export const StyledFooter = styled.footer`
  background: #e9e9e9;
  position: fixed;
  height: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
`;
