import PropTypes from 'prop-types';
import capitalize from '../../../utils/capitalize';
import {
  RoomId,
  Users,
  Room,
  TextContainer
} from './styles';

export default function StaticRooms ({ handleClick, rooms }) {
  return rooms.map(data => {
    return (
      <Room backgroundImg={data.image_url}>
        <TextContainer onClick={() => handleClick(data.roomId)}>
          <RoomId>
            <span className='room-name'>{capitalize(data.roomId)}</span>
          </RoomId>
          <Users>
            <span className='chat-bubble'>💬</span> <span className='user-number'>{ data.socketUsers }</span>
          </Users>
        </TextContainer>
      </Room>
    );
  });
}
StaticRooms.propTypes = {
  handleClick: PropTypes.func,
  rooms: PropTypes.array
};
