import React, { useContext, useState, useRef }  from 'react'
import * as styles from './styles';
import DropDown from '../DropDown';
import { Context } from '../../Context';


const Navbar = () => {

  const [menu, setMenu] = useState('none');
  const menuButton = useRef()

  const handleClick = () => {
    setMenu(prev => prev === 'none' ? 'initial' : 'none');
  }

  return  (
    <styles.Nav>
      <styles.Menu className={'menu-button'} ref={menuButton} onClick={handleClick}>
        ☰
      </styles.Menu>
      <DropDown display={menu} />
    </styles.Nav>
  )
}

export default Navbar;