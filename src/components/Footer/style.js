import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100%;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
background-color: ${props => props.theme.colors.footer};
text-align: center;
font-size: ${props => props.theme.sizes.small};
`
export const StyledFooterText = styled.p`
padding: 0;
margin: 0 auto;
color: white;
`