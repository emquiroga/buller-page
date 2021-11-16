import styled from "styled-components"
import HeaderMobile from "assets/latas.jpg"
// import HeaderBG from "assets/latas-desktop.jpg"

export const StyledHeader = styled.header`
width: 100%;
height: 412px;
margin: 0;
padding: 33px 0 0 0;
display: flex;
flex-flow: column;
background-image: url(${HeaderMobile});
background-size: cover;
`
export const Logo = styled.svg`
margin-left: 12px;
`
export const Media = styled.div`
width: 100%;
padding: 1rem 0;
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
`
export const MediaLink = styled.a`
display: block;
margin: auto 12px;
padding: 0;
width: 24px;
height: 24px;
`
export const Navbar = styled.nav`
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
`
