import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: initial;
}
*,
::-webkit-scrollbar, :-moz-appearance {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track, :-moz-appearance {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
}

::-webkit-scrollbar-thumb, :-moz-appearance {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.footer};
  -webkit-box-shadow: inset 0 0 6px${({ theme }) => theme.colors.body};
  box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.body};
}
body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.body};
}
svg:hover {
  path{
    fill: ${({ theme }) => theme.colors.grayish};
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }
}
`