import styled from 'styled-components';

export const MainDesk = styled.main`
@media (max-width: 1023px) {
    display: none;
}
width: 100%;
background-color: ${({ theme }) => theme.colors.body};
overflow: hidden;
display: flex;
flex-flow: row wrap;
`
export const Column = styled.div`
width: 45%;
padding: 2rem 2.5%;
display: flex;
flex-direction: column;
flex-basis: 100%;
flex:1;
justify-content: space-around;
`
export const DeskImage = styled.img`
width: 100%;
max-width: 600px;
margin: 1rem auto;
border-radius: .75rem;
:hover {
    transform: scale(1.035);
    transition: all 350ms ease-in-out;
}
`