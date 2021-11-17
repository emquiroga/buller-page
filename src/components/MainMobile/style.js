import styled from "styled-components";

export const MainMob = styled.main`
width: 100%;
background-color: ${({ theme }) => theme.colors.body};
overflow: hidden;
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    display: none;
}
`
export const MainTitle = styled.h1`
font-size: 24px;
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: 600;
padding: 2rem 1rem;
color: white;
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    font-size: 30px;
}
`
export const MainText = styled.p`
width: 93%;
margin: .25rem auto;
padding: 1.25rem 1rem;
color: white;
text-align: left;
font-weight: 400;
font-size: 16px;
font-family: ${({ theme }) => theme.fonts.extra};
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    width: 100%;
    font-size: 20px;
}
`

export const ImgContainer = styled.div`
width: 85%;
height: auto;
margin: auto;
padding: 1rem;
max-height: 404px;
display: flex;
flex-flow: row;
overflow-x: scroll;
scroll-behavior: smooth;
cursor: pointer;

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.footer};
  -webkit-box-shadow: inset 0 0 6px${({ theme }) => theme.colors.body};
  box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.body};
}
`
export const MobileImage = styled.img`
width: 100%;
max-width: 400px;
height: auto;
margin-right: 12px;
`