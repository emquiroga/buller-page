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
    height: 100vh;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.primary};
}
main {
  width: 100%;
  background-color: ${({ theme }) => theme.colors.body};
  overflow: hidden;
}
h1{
  font-size: ${({ theme }) => theme.sizes.large};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 2rem 1rem 1rem 1rem;
  color: white;
}
p {
  padding: 0 1rem 1rem 1rem;
  margin: 0 auto;
  color: white;
}
`