import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({navToggle, setNavToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation setNavToggle={setNavToggle}/>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    z-index: 20;
    transition: 1500ms ease-in-out;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        
    }
`;

export default Sidebar;
