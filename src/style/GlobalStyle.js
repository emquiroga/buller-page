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
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  cursor: pointer;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px${({ theme }) => theme.colors.black};
  box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.black};
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
path:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.body};
    transition: all 200ms ease-in-out;
}
`