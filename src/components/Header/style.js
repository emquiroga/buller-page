import styled from "styled-components"
import HeaderMobile from "assets/latas.jpg"
import HeaderDesk from "assets/latas-desktop.jpg"

export const StyledHeader = styled.header`
width: 100%;
height: 412px;
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
background: linear-gradient(rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%), url(${HeaderMobile});
background-size: cover;
@media (min-width: ${props => props.theme.breakPoints.large}) {
    height: 683px;
    flex-flow: row;
    background:  linear-gradient(rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 50%), url(${HeaderDesk});
    background-size: cover;
    background-position: right;
}
`
export const Logo = styled.svg`
margin-left: 12px;
@media (min-width: ${props => props.theme.breakPoints.large}) {
    margin: auto 0;
    padding: 0;
    flex: 1;
    transform: scale(1.2)
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
cursor: pointer;
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
`
export const NavLink = styled.a`
display: block;
color: white;
margin: auto 2rem;
font-size: ${props => props.theme.sizes.medium};
font-family: ${props => props.theme.fonts.extra};
cursor: pointer;
:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.body};
    transition: all 200ms ease-in-out;
}
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
border-bottom: 1px solid grey;
}

`
