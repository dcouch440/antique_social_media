import { useContext, useEffect } from 'react';
import Socket from '../../components/Socket';
import { SHOW_ROOM_USER_COUNT } from '../../constant';
import { Context } from '../../Context';

export default function Rooms () {
  const { currentUser } = useContext(Context);
  const { socketRef, activeUserRooms } = Socket();

  useEffect(() => {
    if (!currentUser.id) {
      return;
    }
    socketRef.current.emit(SHOW_ROOM_USER_COUNT, { currentUser });

  }, [currentUser, socketRef]);

  console.log(activeUserRooms);
  return (
    <h1>lol</h1>
  );
}