import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkR }  from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const SideBarContainer = styled.aside`
display: grid;
align-items: center;
height: 100%;
width: 100%;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${( { isOpen } ) => (isOpen ? '100%' : '0')};
top: ${( { isOpen } ) => (isOpen ? '0' : '-100%')};
background: #0d0d0d;
position: fixed;
z-index: 999;

`
export const CloseIcon = styled(FaTimes)`
color: #fff;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
outline: none;
cursor: pointer;`

export const SidebarWrapper = styled.div`
color: #fff;
  `
export const SideBarMenu = styled.ul`
display: grid;
text-align: center;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);


@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}`
export const SideBarLink = styled(LinkS)`
dislay: flex;
align-items: centyer;
justify-content: center;
color: #fff;
cursor: pointer;
text-decoration: none;
line-style: none;
transition: 0.2s ease-in-out;
font-size: 1.2rem;

&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}

`
export const SideBarBtnWrap = styled.div`
display: flex;
justify-content: center;`

export const SideBarRouter = styled(LinkR)`
border-readius: 50px;
background: #01bf71;
padding: 16px 64px;
white-space: nowrap;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
   color: #010606;
   background: #fff;

}`