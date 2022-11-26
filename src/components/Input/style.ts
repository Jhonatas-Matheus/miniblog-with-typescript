import styled from "styled-components";

export const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  span {
    margin-bottom: 0.3em;
    font-weight: bold;
    text-align: left;
  }
  input {
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
  }
`;
