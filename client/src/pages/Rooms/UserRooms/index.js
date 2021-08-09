import PropTypes from 'prop-types';

import {
  Users,
  Room,
  NoRooms
} from './styles';

export default function ActiveUserRooms ({ handleClick, rooms }) {

  const mappedRooms =  rooms.map((data, key) => {

    return (
      <Room
        key={key}
        onClick={() => handleClick(data.roomId)}
      >
        <div className='name'>{data.name}</div>
        <Users>
          <span className='chat-bubble'>💬</span>
          <span className='user-number'>{ data.socketUsers }</span>
        </Users>
      </Room>
    );
  });

  return (
    <>
      {
        mappedRooms.length ?
          mappedRooms
          :
          <NoRooms>Ouch, no ones chatting!</NoRooms>
      }
    </>
  );
}

ActiveUserRooms.propTypes = {
  handleClick: PropTypes.func,
  rooms: PropTypes.array
};

