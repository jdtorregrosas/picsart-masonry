import { Link, Outlet } from "react-router";
import { HomeIcon } from "./home.icon";
import {
  StyledFooter,
  StyledHeader,
  StyledHeaderSubtitle,
  StyledHeaderTitle,
  StyledLayoutWrapper,
} from "./styled";

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <StyledHeaderTitle>Picsart Job application 2025</StyledHeaderTitle>
          <StyledHeaderSubtitle>Julian Torregrosa</StyledHeaderSubtitle>
        </div>
        <Link to={"/"}>
          <HomeIcon color="#c209c1" />
        </Link>
      </StyledHeader>
      <StyledLayoutWrapper>
        <Outlet />
      </StyledLayoutWrapper>
      <StyledFooter>Julian Torregrosa</StyledFooter>
    </>
  );
};
