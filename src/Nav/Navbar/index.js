import React, {useState, useRef }  from 'react'
import { Nav, Menu } from './styles';
import DropDown from '../DropDown';


const Navbar = () => {

  const [menu, setMenu] = useState('none');
  const menuButton = useRef()

  const handleClick = () => {
    setMenu(prev => prev === 'none' ? 'initial' : 'none');
  }

  return  (
    <Nav>
      <Menu className={'menu-button'} ref={menuButton} onClick={handleClick}>
        ☰
      </Menu>
      <DropDown display={menu} />
    </Nav>
  )
}

export default Navbar;