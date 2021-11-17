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
`
export const MobileImage = styled.img`
width: auto;
max-width: 400px;
height: auto;
margin-right: 12px;
`