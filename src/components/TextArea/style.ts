import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.8em 0em;
  background-color: transparent;
  &::placeholder {
    font-family: "Montserrat", sans-serif;
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
`;
