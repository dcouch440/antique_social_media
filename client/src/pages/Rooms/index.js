import {
  RoomHeaders,
  RoomsContainer,
  Toggle
} from './styles';
import {
  useContext,
  useEffect,
  useState
} from 'react';

import PageTransition from '../../Framer/PageTransition';
import PropTypes from 'prop-types';
import { RoomContext } from '../../context/Room';
import { SHOW_ROOM_USER_COUNT } from '../../constant';
import { SessionContext } from '../../context/Session';
import StaticRooms from './StaticRooms';
import UserRooms from './UserRooms';
import useChatSocket from '../../hooks/useChatSocket';
import { useHistory } from 'react-router';

export default function Rooms () {
  const history = useHistory();
  const { currentUser } = useContext(SessionContext);
  const { setRoomId } = useContext(RoomContext);
  const { socketRef, roomData } = useChatSocket();
  const [showUserRooms, setShowUserRooms] = useState(false);
  const { activeUserRooms, activeRooms } = roomData;

  useEffect(() => {
    if (!currentUser.id) { return; }
    socketRef.current.emit(SHOW_ROOM_USER_COUNT, { currentUser });
  }, [currentUser, socketRef]);

  const handleClick = roomId => {
    setRoomId(roomId);
    history.push('/chat');
  };

  const handleToggle = () => {
    setShowUserRooms(prev => !prev);
  };

  return (
    <PageTransition>
      <RoomsContainer>
        <RoomHeaders>
          <span>Rooms</span>
          <Toggle onClick={handleToggle}>
            { showUserRooms ? 'Your Rooms' : 'Public Rooms' }
          </Toggle>
        </RoomHeaders>
        { !showUserRooms ?
          <StaticRooms
            handleClick={handleClick}
            rooms={activeRooms}
          />
          :
          <UserRooms
            handleClick={handleClick}
            rooms={activeUserRooms}
          />
        }

      </RoomsContainer>
    </PageTransition>
  );
}

Rooms.propTypes = {
  setRoomId: PropTypes.func
};
