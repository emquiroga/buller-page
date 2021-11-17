import styled from "styled-components";

export const Container = styled.div`
background-color: transparent;
width: 100%;
height: auto;
position: relative;
background-color: transparent;
`
export const ContentWrapper = styled.div`
width: auto;
height: auto;
padding: 1rem;
display: flex;
flex-flow: column wrap;
flex-basis: auto;
flex-grow: reverse;
text-align: left;
font-weight: bold;
background-color: white;
overflow: hidden;
transform-origin: bottom left;
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    max-width: 650px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-75%, -120%);
}
@media (min-width: ${({ theme }) => theme.breakPoints.xlarge}) {
    transform: translate(-105%, -125%);
}
@media (min-width: ${({ theme }) => theme.breakPoints.xXL}) {
    transform: translate(-102%, -120%);
}
`
export const Content = styled.p`
font-family: ${({ theme }) => theme.fonts.secondary};
font-size: ${({ theme }) => theme.sizes.large};
font-weight: bold;
margin: auto;
padding: 1.5rem 0;
color: black;
@media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
}
`
export const SliderLink = styled.a`
display: block;
margin: 1.5rem 0;
text-decoration: underline;
font-family: ${({ theme }) => theme.fonts.extra};
font-weight: 600;
font-size: ${({ theme }) => theme.sizes.medium};
color: ${({ theme }) => theme.colors.links};
cursor: pointer;
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
max-width: ${({ theme }) => theme.breakPoints.xlarge};
height: 81px;
margin: 0;
padding: 0;
display: flex;
flex-flow: row;
background-color: ${({ theme }) => theme.colors.black};
justify-content: space-around;  
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -100%);  
}
`
export const NavButton = styled.button`
height: 80%;
margin: auto;
padding: 0;
border: none;
padding: 0.5rem 1.5rem;
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.grayish};
font-size: ${({ theme }) => theme.sizes.medium};
font-family: ${({ theme }) => theme.fonts.extra};
cursor: pointer;
:hover {
    color: white;
    border-bottom: 3px inset ${({ theme }) => theme.colors.hover};
    transition: all 200ms ease-in-out;
}
`