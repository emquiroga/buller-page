import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: initial;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.5;
}
path:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.body};
    transition: all 200ms ease-in-out;
}
`