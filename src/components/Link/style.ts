import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: #000;
  transition: 0.4s;
  font-size: 1em;
  cursor: pointer;
  font-family: "Montserrat", sans-seri;
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;
  &:hover {
    background-color: var(--btn-color-outline-hover);
    color: #fff;
  }
`;
