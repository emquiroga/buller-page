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
font-size: ${({ theme }) => theme.sizes.large};
font-family: ${({ theme }) => theme.fonts.secondary};
padding: 2rem 1rem 1rem 1rem;
color: white;
`
export const MainText = styled.p`
padding: 1.5rem 1rem;
margin: auto;
color: white;
`

export const ImgContainer = styled.div`
width: 100%;
height: auto;
padding: 1rem;
max-height: 404px;
display: flex;
flex-flow: row;
:hover {
    animation: scroll 30s linear infinite;
}
@keyframes scroll {
    0% {
       transform: translateX(0); 
    }
    100% {
        transform: translateX(calc(-210px * 3));
    }
}
`
export const MobileImage = styled.img`
width: 100%;
max-width: 400px;
height: auto;
margin-right: 1rem;
border-radius: 5px;
:hover {
    transform: scale(1.035);
    transition: all 350ms ease-in-out;
}
:nth-of-type(1){
    width: 70%;
}



`