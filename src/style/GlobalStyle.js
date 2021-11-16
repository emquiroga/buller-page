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
    line-height: 1.5;
}
main {
  width: 100%;
  background-color: ${({ theme }) => theme.colors.body};
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
main h1{
  font-size: ${({ theme }) => theme.sizes.large};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 2rem 1rem 1rem 1rem;
  color: white;
  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    grid-column: 1;
  }
}
main p {
  padding: 1.5rem 1rem;
  margin: auto;
  color: white;

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    grid-column: 1;
  }
}
`