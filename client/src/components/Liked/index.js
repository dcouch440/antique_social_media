import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../Context';
import PropTypes from 'prop-types';
import likedVariants from './variants';
import { motion } from 'framer-motion';
import axios from 'axios';
import likeImage from '../../img/assets/waxSealImg.png';
import dislikeImage from '../../img/assets/waxSealGrey50.png';

import {
  Check
} from './styles';

export default function Liked ({ antiqueId, onLikesChange }) {
  const [liked, setLiked] = useState(false);
  const { currentUser } = useContext(Context);
  const like = likeImage;
  const display = liked ? like : dislikeImage;
  const loading = useRef(false);

  useEffect(() => {
    axios
      .get(
        `/likes/${antiqueId}`, {},
        { withCredentials: true }
      )
      .then(res => {
        res.status === 200 && setLiked(res.data.isLiked);
      })
      .catch(err => console.log(err));

  }, [antiqueId, currentUser]);

  const handleClick = e => {
    e.stopPropagation();
    if (loading.current) {
      return;
    }
    loading.current = true;

    !liked && axios
      .post(
        `/likes/${antiqueId}`, {},
        { withCredentials: true }
      )
      .then(res => {
        loading.current = false;
        if (res.status === 201) {
          setLiked(true);
          onLikesChange && onLikesChange(prev => prev += 1);
        }
      })
      .catch(err => console.log(err));

    liked && axios
      .delete(
        `/likes/${antiqueId}`, {},
        { withCredentials: true }
      )
      .then(res => {
        loading.current = false;
        if (res.status === 204) {
          setLiked(false);
          onLikesChange && onLikesChange(prev => prev += 1);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    currentUser.id ?
      <Check
        as={motion.div}
        variants={likedVariants}
        initial='hidden'
        animate='visible'
        transition='transition'
        onClick={handleClick}
      >
        <img src={display} alt='liked' />
      </Check>
      :
      null
  );
}

Liked.defaultProps = {
  onLikesChange: false
};

Liked.propTypes = {
  antiqueId: PropTypes.number,
  onLikesChange: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
};
