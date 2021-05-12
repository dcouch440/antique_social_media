import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import Socket from '../../components/Socket';
import PageTransition from '../../Framer/PageTransition';
import { SHOW_ROOM_USER_COUNT } from '../../constant';
import { Context } from '../../Context';
import { RoomsContainer, RoomHeaders, Toggle } from './styles';
import { useHistory } from 'react-router';
import StaticRooms from './StaticRooms';
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
          <StaticRooms rooms={activeRooms} handleClick={handleClick} />
          :
          <UserRooms rooms={activeUserRooms} handleClick={handleClick} />
        }

      </RoomsContainer>
    </PageTransition>
  );
}

Rooms.propTypes = {
  setRoomId: PropTypes.func
};
