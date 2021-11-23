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

import DropDown from './DropDown';
import { SessionContext } from '../context/Session';
import { UIContext } from '../context/UI';
import UploadModal from '../components/UploadModal';
import { useCallback } from 'react';
import { useMemo } from 'react';

export default function Navbar () {
  const [menu, setMenu] = useState('none');
  const menuButton = useRef();
  const { setScrollBehavior } = useContext(UIContext);
  const { currentUser } = useContext(SessionContext);
  const [show, setShow] = useState(false);

  const handleClick = () => setMenu(prev => prev === 'none' ? 'initial' : 'none');

  const handleModalChange = useCallback(() => {
    setScrollBehavior(prev => !prev);
    setShow(prev => !prev);
  }, [setScrollBehavior]);

  return useMemo(() => (
    <>
      { show &&
        <Page>
          <UploadModal
            currentUser={currentUser}
            modalShowChange={handleModalChange}
            route='/avatars'
            startMessageText='Upload your avatar.'
          />
        </Page>
      }
      <Nav>
        <Menu
          className='menu-button'
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
  ), [currentUser, handleModalChange, menu, show]);
}