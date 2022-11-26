import styled, { css } from "styled-components";
export interface iStyledButtonProp {
  mode: "main" | "dark" | "outline" | "danger";
  type: string;
  disable?: boolean;
}
export const StyledButton = styled.button<iStyledButtonProp>`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: #000;
  transition: 0.4s;
  font-size: 1em;
  cursor: pointer;
  font-family: "Montserrat", sans-seri;
  background-color: var(--btn-color-primary);
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
  &:hover {
    background-color: var(--btn-color-hover);
    color: var(--btn-text-color-navbar-hover);
  }
  &:disabled {
    background-color: var(--btn-color-disable);
  }
  ${({ mode }) => {
    if (mode === "main") {
      return css`
        background-color: var(--btn-color-primary);
      `;
    } else if (mode === "dark") {
      return css`
        background-color: var(--btn-color-dark);
        border-radius: 0;
        &:hover {
          background-color: var(--btn-color-primary);
          color: var(--btn-text-color-hover);
        }
      `;
    } else if (mode === "outline") {
      return css`
        background-color: var(--btn-color-outline);
        border-radius: 0;
        color: #000;
        border: 1px solid #000;
        padding: 7px 30px;
        &:hover {
          background-color: var(--btn-color-outline-hover);
        }
      `;
    } else if (mode === "danger") {
      return css`
        background-color: var(--btn-color-outline);
        border-radius: 0;
        color: #000;
        border: 1px solid #000;
        padding: 7px 30px;
        &:hover {
          background-color: var(--btn-color-danger-hover);
        }
      `;
    }
  }}
`;
