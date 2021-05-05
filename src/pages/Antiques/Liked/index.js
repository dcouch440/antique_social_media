import axios from 'axios';
import { Context } from '../../../Context';
import React, { useContext, useEffect, useState } from 'react';
import likedVariants from './variants';
import { Check } from './styles';
import { motion } from 'framer-motion';

const Liked = ({antiqueId}) => {
  const [liked, setLiked] = useState(false);
  const { currentUser } = useContext(Context);
  const display = liked ? 'F' : 'add';

  useEffect(() => {
    axios.get(
      `/likes/${antiqueId}`, {},
      { withCredentials: true }
    )
      .then(res => res.status === 200 && setLiked(res.data.isLiked))
      .catch(err => console.log(err));
  }, [antiqueId, currentUser]);

  const handleClick = e => {
    e.stopPropagation();

    !liked && axios.post(
      `/likes/${antiqueId}`, {},
      { withCredentials: true }
    )
      .then(res => res.status === 201 && setLiked(true))
      .catch(err => console.log(err));

    liked && axios.delete(
      `/likes/${antiqueId}`, {},
      { withCredentials: true }
    )
      .then(res => res.status === 204 && setLiked(false))
      .catch(err => console.log(err));
  };

  return  (
    currentUser.id ?
      <Check
        as={motion.div}
        variants={likedVariants}
        initial='hidden'
        animate='visible'
        transition='transition'
        onClick={handleClick}
      >
        {display}
      </Check>
      :
      null
  );
};

export default Liked;