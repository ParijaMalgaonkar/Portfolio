import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><h1>Pibbu</h1></NavLogo>
                    <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="education">Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <a style={{textDecoration: 'none'}}href="https://github.com/ParijaMalgaonkar"  target="_blank">
                        <NavBtnLink>GitHub Profile</NavBtnLink></a>
                    </NavBtn>

                </NavbarContainer>

            </Nav>
    )
}

export default Navbar;
