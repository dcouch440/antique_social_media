import axios from 'axios';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Context } from '../../Context';
import dislikeImage from '../../img/assets/waxSealGrey50.png';
import likeImage from '../../img/assets/waxSealImg.png';
import { Check } from './styles';
import likedVariants from './variants';


export default function Liked ({ antiqueId, onLikesChange }) {
  /*
    Problem:
      Likes and dislikes did not reflect the new status so individual-
      states where added to reflect the new status of the likes.

    FIX:
      return graph fetched likes as before.
      Each Like will still have access to like/unlike toggle but,
      After a request is made it will update the local like/disliked value-
      to reflect the new status of the like.

      on login a for-in search for likes can be made and the existing data can be added or merged to the array of images.

      a separate request can be made for users logged in and not logged in?
  */
  const [liked, setLiked] = useState(false);
  const { currentUser } = useContext(Context);
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
