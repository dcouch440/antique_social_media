import PropTypes from 'prop-types';
import {
  useContext,
  useEffect,
  useState
} from 'react';
import { useHistory } from 'react-router';
import Socket from '../../components/Socket';
import { SHOW_ROOM_USER_COUNT } from '../../constant';
import { Context } from '../../Context';
import PageTransition from '../../Framer/PageTransition';
import StaticRooms from './StaticRooms';
import {
  RoomHeaders,
  RoomsContainer,
  Toggle
} from './styles';
import UserRooms from './UserRooms';

export default function Rooms ({ setRoomId }) {
  const history = useHistory();
  const { currentUser } = useContext(Context);
  const { socketRef, roomData } = Socket();
  const [showUserRooms, setShowUserRooms] = useState(false);
  const { activeUserRooms, activeRooms } = roomData;

  useEffect(() => {
    if (!currentUser.id) {
      return;
    }
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
