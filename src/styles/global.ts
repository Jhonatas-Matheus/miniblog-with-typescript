import { createGlobalStyle } from "styled-components";
// interface iGlobalStyle {
//   children: React.ReactNode;
// }
export const GlobalStyle = createGlobalStyle`
:root{
    --btn-color-primary: #1a8918;
    --btn-color-hover: #0f730c;
    --btn-color-outline: transparent;
    --btn-color-outline-hover: #000;
    --btn-color-danger-hover: #dc3545;
    --btn-color-disable: #aaa; 
    --btn-text-color-hover: #fff;
    --btn-text-color-navbar-hover: #bbb;
    --btn-color-dark: #000;
    --container-color-error: #f8d7da;
    --container-text-color-error: #721c24;
}
body {
  background-color: #f6fcff;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  
}
a,
nav{
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: #000;
  transition: 0.4s;
  font-size: 1em;
  cursor: pointer;
  font-family: "Montserrat", sans-seri;
}
a:hover,
nav button:hover {
  color: var(--btn-text-color-navbar-hover);
}
`;
