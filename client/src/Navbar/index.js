import {
  Menu,
  Nav,
  Page
} from './styles';
import React, {
  useContext,
  useRef,
  useState
} from 'react';

import { Context } from '../Context';
import DropDown from './DropDown';
import UploadModal from '../components/UploadModal';

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
      { show &&
        <Page>
          <UploadModal
            currentUser={currentUser}
            modalShowChange={handleModalChange}
            route='/users/avatars'
            startMessageText='Upload your avatar.'
          />
        </Page>
      }
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