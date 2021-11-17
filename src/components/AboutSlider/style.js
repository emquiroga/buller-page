import styled from "styled-components";

export const Container = styled.div`
background-color: transparent;
width: 100%;
height: auto;
position: relative;
`
export const ContentWrapper = styled.div`
width: 90%;
height: 100%;
margin: auto;
padding: 1rem;
font-weight: bold;
background-color: white;
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    max-width: 680px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10%, -100%);
}
`
export const Content = styled.p`
font-family: ${({ theme }) => theme.fonts.secondary};
font-size: ${({ theme }) => theme.sizes.large};
font-weight: bold;
margin: auto;
padding: 1.5rem 0;
color: black;
`
export const SliderLink = styled.a`
display: block;
margin: 1.5rem auto;
text-decoration: underline;
font-family: ${({ theme }) => theme.fonts.extra};
font-weight: 600;
font-size: ${({ theme }) => theme.sizes.medium};
color: ${({ theme }) => theme.colors.links};
`

export const ButtonWrapper = styled.div`
display: flex;
flex-flow: row wrap;
position: absolute;
top: 0;
left: 0;
transform: translate(0, -100%);
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    visibility: hidden;
}
`
export const SliderButton = styled.button`
display: block;
width: 74.07px;
height: 60px;
margin: 0 1px 0 0;
padding: 0;
background-color: ${({ theme }) => theme.colors.black};
border: none;
color: white;
font-family: ${({ theme }) => theme.fonts.secondary};
font-size: ${({ theme }) => theme.sizes.large};
cursor: pointer;
:hover {
    background-color: ${({ theme }) => theme.colors.body};
    transition: all 200ms ease-in-out;
}
`
export const SliderNav = styled.nav`
display: none;
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
width: 100%;
margin: 0;
padding: 1rem 0;
display: flex;
flex-flow: row;
background-color: black;
color: white;
justify-content: space-around;    
}
`
export const NavButton = styled.button`
margin: 0;
padding: 0;
border: none;
padding: 0.5rem 1.5rem;
background-color: transparent;
color: white;
font-size: ${({ theme }) => theme.sizes.medium};
cursor: pointer;
:hover {
    color: ${({ theme }) => theme.colors.body};
    transition: all 200ms ease-in-out;
}
`