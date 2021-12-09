import {
  AntLikes,
  Avatar,
  Like,
  LikesCount,
  NoLikes
} from './styles';
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import axios from "axios";

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

  const mappedLikes = likes.map((data, i) => {
    return (
      <Like key={i}>
        <Avatar
          alt='avatar'
          src={data.avatar}
        />
      </Like>
    );
  });

  return (
    <AntLikes>
      <LikesCount>Likes: <span className='number'>{count}</span></LikesCount>
      {
        mappedLikes.length
          ? mappedLikes
          : <NoLikes>Like This Post? Like it!</NoLikes>
      }
    </AntLikes>
  );
}

AntiqueLikes.propTypes = {
  antiqueId: PropTypes.any,
  likesChange: PropTypes.any
};
