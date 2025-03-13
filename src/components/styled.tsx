import { Link } from "react-router";
import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 30px;
  background: #c209c1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    filter: brightness(80%);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  color: #c209c1;
  margin-bottom: 32px;
  text-decoration: none;
  transition: all 0.2s linear;
  transform-origin: left;

  &:hover {
    transform: translateY(5px);
    filter: brightness(150%);
  }
`;
