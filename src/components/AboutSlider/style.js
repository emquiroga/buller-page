import styled from "styled-components";

export const Container = styled.div`
background-color: white;
width: 100%;
height: auto;
position: relative;
color: black;

`
export const ContentWrapper = styled.div`
width: 80%;
height: 100%;
margin: auto;
padding: 1rem;
font-weight: bold;
`
export const Content = styled.p`
font-family: ${({ theme }) => theme.fonts.secondary};
font-size: ${({ theme }) => theme.sizes.large};
color: black;
`
export const SliderLink = styled.a`
display: block;
margin-top: auto;
text-decoration: underline;
color: grey;
`

export const ButtonWrapper = styled.div`
display: flex;
flex-flow: row wrap;
position: absolute;
top: 0;
left: 0;
transform: translate(0, -100%);
`
export const SliderButton = styled.button`
display: block;
width: 74.07px;
height: 60px;
margin: 0 1px 0 0;
padding: 0;
background-color: black;
border: none;
color: white;
font-size: ${({ theme }) => theme.sizes.large};
`