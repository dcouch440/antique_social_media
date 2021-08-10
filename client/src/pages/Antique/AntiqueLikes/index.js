import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  AntLikes,
  Avatar,
  Like,
  LikesCount,
  NoLikes
} from './styles';


export default function AntiqueLikes ({ antiqueId, likesChange }) {
  const [likes, setLikes] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`/antiques/${antiqueId}/likes`, {
        withCredentials: true
      })
      .then(res => {
        setCount(res.data.count);
        setLikes([...res.data.likes]);
      })
      .catch(err => console.log(err));
  }, [antiqueId, likesChange]);

  const mappedLikes = likes.map(data => {
    return (
      <Like key={data.username}>
        <Avatar
          alt='avatar'
          src={data.avatar.secure_url}
        />
      </Like>
    );
  });

  return (
    <AntLikes>
      <LikesCount>Likes: <span className='number'>{count}</span></LikesCount>
      {
        mappedLikes.length ?
          mappedLikes
          :
          <NoLikes>Like This Post? Like it!</NoLikes>
      }
    </AntLikes>
  );
}

AntiqueLikes.propTypes = {
  antiqueId: PropTypes.any,
  likesChange: PropTypes.any
};
