import styled from 'styled-components';

export const MainDesk = styled.main`
@media (max-width: 1023px) {
    display: none;
}
width: 100%;
background-color: ${({ theme }) => theme.colors.body};
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
max-width: 680px;
margin: 1rem;
padding:  0;
@media (min-width: ${({ theme }) => theme.breakPoints.xlarge}) {
    max-width: 750px;
}
`