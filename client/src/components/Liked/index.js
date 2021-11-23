import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import { Check } from './styles';
import PropTypes from 'prop-types';
import { SessionContext } from '../../context/Session';
import axios from 'axios';
import dislikeImage from '../../img/assets/waxSealGrey50.png';
import likeImage from '../../img/assets/waxSealImg.png';
import likedVariants from './variants';
import { motion } from 'framer-motion';

export default function Liked ({ antiqueId, onLikesChange }) {
  const [liked, setLiked] = useState(false);
  const { currentUser } = useContext(SessionContext);
  const like = likeImage;
  const display = liked ? like : dislikeImage;
  const loading = useRef(false);

  useEffect(() => {
    if (!currentUser.id) { return; }

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

  const handleClick = async e => {
    e.stopPropagation();

    if (loading.current) { return; }
    loading.current = true;
    try {
      !liked && await axios
        .post(
          `/likes/${antiqueId}`,
          { user_id: currentUser.id },
          { withCredentials: true }
        )
        .then(res => {
          loading.current = false;
          if (res.status === 201) {
            setLiked(true);
            onLikesChange && onLikesChange(prev => prev += 1);
          }
        });

      liked && await axios
        .delete(
          `/likes/${antiqueId}`,
          { user_id: currentUser.id },
          { withCredentials: true }
        )
        .then(res => {
          loading.current = false;
          if (res.status === 204) {
            setLiked(false);
            onLikesChange && onLikesChange(prev => prev += 1);
          }
        });
    } catch (err) {
      loading.current = false;
      console.log(err);
    }
  };

  return (
    currentUser.id ?
      <Check
        animate='visible'
        as={motion.div}
        initial='hidden'
        transition='transition'
        variants={likedVariants}
        onClick={handleClick}
      >
        <img
          alt='liked'
          src={display}
        />
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
