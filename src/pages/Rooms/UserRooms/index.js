import PropTypes from 'prop-types';
import { Users, Room, AntiqueImage, NoRooms } from './styles';

export default function ActiveUserRooms ({ handleClick, rooms }) {

  const repeat = Array(15).fill().map(data => rooms).flat();

  const mappedRooms =  repeat.map(data => {
    const [image] = data.images;
    return (
      <Room onClick={() => handleClick(data.roomId)}>
          <div className='name'>{data.name}</div>
          <Users>
            <span className='chat-bubble'>💬</span>
            <span className='user-number'>{ data.socketUsers }</span>
          </Users>
          <AntiqueImage src={image.image_url} alt='antique' />
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

