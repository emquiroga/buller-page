import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100%;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
background-color: ${props => props.theme.colors.footer};
font-size: ${props => props.theme.sizes.small};
@media (min-width: ${props => props.theme.breakPoints.large}) {
    flex-direction: row;
    justify-content: center;
}
`
export const StyledFooterText = styled.p`
padding: 0;
margin: 0 auto;
color: white;
text-align: center;
@media (min-width: ${props => props.theme.breakPoints.large}) {
    margin: 2px;
    padding: 1rem 0;
}
`