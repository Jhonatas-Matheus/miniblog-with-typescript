import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
interface iStyledHeaderContainerProps {
  className: "true" | "false";
}
export const StyleedHeaderContainer = styled.header`
  nav {
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 2em;
  }

  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 1em;
      button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        align-self: center;
        font-size: 1.2em;
        padding: 0.2em 0.6em;
        span {
          font-weight: 900;
          text-transform: uppercase;
        }
        &.active {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 1.2em;
  padding: 0.4em 0.6em;
  span {
    font-weight: 900;
    text-transform: uppercase;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;
