import React, {useState, useRef } from 'react';
import { Nav, Menu } from './styles';
import DropDown from './DropDown';


export default function Navbar ()
{
  const [menu, setMenu] = useState('none');
  const menuButton = useRef();

  const handleClick = () => {
    setMenu(prev => prev === 'none' ? 'initial' : 'none');
  };

  return (
    <Nav>
      <Menu className={'menu-button'} ref={menuButton} onClick={handleClick}>
        ☰
      </Menu>
      <DropDown display={menu} />
    </Nav>
  );
}