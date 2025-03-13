import { Outlet } from "react-router";
import { StyledFooter, StyledLayoutWrapper } from "./styled";

export const Layout = () => {
  return (
    <>
      <StyledLayoutWrapper>
        <Outlet />
      </StyledLayoutWrapper>
      <StyledFooter>Julian Torregrosa</StyledFooter>
    </>
  );
};
