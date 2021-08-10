import React, {
  useContext,
  useRef,
  useState
} from 'react';
import { Context } from '../Context';
import Avatar from './Avatar';
import DropDown from './DropDown';
import { Menu, Nav } from './styles';


export default function Navbar () {
  const [menu, setMenu] = useState('none');
  const menuButton = useRef();
  const { setScrollBehavior, currentUser } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setMenu(prev => prev === 'none' ? 'initial' : 'none');
  };

  const handleModalChange = () => {
    setScrollBehavior(prev => !prev);
    setShow(prev => !prev);
  };

  return (
    <>
      { show && <Avatar
        currentUser={currentUser}
        hideAvatar={handleModalChange}
      /> }
      <Nav>
        <Menu
          className={'menu-button'}
          ref={menuButton}
          onClick={handleClick}
        >
            ☰
        </Menu>
        <DropDown
          currentUser={currentUser}
          display={menu}
          showAvatar={handleModalChange}
        />
      </Nav>

    </>
  );
}