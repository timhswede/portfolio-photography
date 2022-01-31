import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './AppSideBarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle} activeStyle>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/recent' onClick={toggle} activeStyle>
                        Recent Work
                    </SidebarLink>
                    <SidebarLink to='/gallery' onClick={toggle} activeStyle>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle} activeStyle>
                        About
                    </SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle} activeStyle>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar