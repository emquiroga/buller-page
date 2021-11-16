import styled from "styled-components"
import HeaderMobile from "assets/latas.jpg"
import HeaderBG from "assets/latas-desktop.jpg"

export const StyledHeader = styled.header`
width: 100%;
height: 412px;
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
background-image: url(${HeaderMobile});
background-size: cover;
@media (min-width: ${props => props.theme.breakPoints.large}) {
    flex-flow: row;
    background-image: url(${HeaderBG});
}
`
export const Logo = styled.svg`
margin-left: 12px;
@media (min-width: ${props => props.theme.breakPoints.large}) {
    margin: auto 0;
    padding: 0;
    flex: 1;
}
`
export const Media = styled.div`
@media (min-width: ${props => props.theme.breakPoints.large}) {
    display: none;
}
width: 100%;
padding: 2rem 0 1rem 0;
display: flex;
flex-flow: row;
border-bottom: 1px solid grey;
background-color: ${props => props.theme.colors.blackSt};
`
export const MediaWrapper = styled.div`
margin-left: auto;
display: flex;
flex-flow: row;
justify-content: space-between;
align-content: space-around;
@media (min-width: ${props => props.theme.breakPoints.large}) {
    height: 100%;
    flex: 1;
    border-left: 1px solid grey;
}
`
export const MediaLink = styled.a`
display: block;
margin: auto 12px;
padding: 0;
width: 24px;
height: 24px;
`
export const Navbar = styled.nav`
@media (min-width: ${props => props.theme.breakPoints.large}) {
    display: none;
}
width: 100%;
padding: 1rem 0;
display: flex;
flex-flow: row;
justify-content: space-around;
align-content: space-around;
border-bottom: 1px solid grey;
background-color: ${props => props.theme.colors.blackSt};
`
export const NavLink = styled.a`
display: block;
color: white;
margin: auto 2rem;
`
export const LinkWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-left: auto;
flex: 2;
`
export const DeskNavbar = styled.nav`
display: none;
@media (min-width: ${props => props.theme.breakPoints.large}) {
width: 100%;
max-height: 95px;
margin: 0;
padding: 0 1rem;
display: flex;
flex-flow: row;
align-content: center;
background-color: ${props => props.theme.colors.blackSt};
border-bottom: 1px solid grey;
}

`
