import styled from "styled-components";

export const StyledContainer = styled.div`
width: 100%;
height: auto;
padding: 1rem;
max-height: 404px;
display: flex;
flex-flow: row;
:hover {
    animation: scroll 30s linear infinite;
}

`
export const StyledImage = styled.img`
width: 300px;
height: auto;
margin-right: 1rem;
border-radius: 5px;
:hover {
    transform: scale(1.035);
    transition: all 350ms ease-in-out;
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