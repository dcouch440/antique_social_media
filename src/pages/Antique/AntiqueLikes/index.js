import PropTypes from "prop-types";
import { Like, Avatar, AntLikes, NoLikes } from './styles';

export default function AntiqueLikes ({ likes }) {
  // TODO limit query
  const limit = [...likes].slice(0, 10);
  const mappedLikes = limit.map(data => {
    return (
      <Like>
        <Avatar src={data.avatar.image_url} alt='avatar' />
      </Like>
    );
  });
  return (
    <AntLikes>
      {mappedLikes.length ? mappedLikes : <NoLikes>Like This Post? Like it!</NoLikes>}
    </AntLikes>
  );
}
AntiqueLikes.propTypes = {
  likes: PropTypes.array
};
