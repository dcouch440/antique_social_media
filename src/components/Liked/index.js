import axios from 'axios';
import { Context } from '../../Context';
import React, { useContext, useState } from 'react';
import { Check } from './styles';

const Liked = ({isLiked, antiqueId}) => {
  const [liked, setLiked] = useState(isLiked);
  const { currentUser } = useContext(Context);
  const display = liked ? '✔' : '✗'

  const handleClick = (e) => {
    e.stopPropagation();
    if (!liked){
      axios
        .post(
          `/likes/${antiqueId}`,
          {},
          { withCredentials: true }
        )
        .then(res => { console.log(res)
          if (res.status === 201) setLiked(true);
        })
        .catch(err => console.log(err))
    }
    if (liked)
    {
      axios
        .delete(
          `/likes/${antiqueId}`,
          {},
          { withCredentials: true }
        )
        .then(res => {  console.log(res)
          if (res.status === 204) setLiked(false)
        })
        .catch(err => console.log(err))
    }
  }

  return  (
    currentUser.id ?
      <Check onClick={handleClick}>
        {display}
      </Check>
      :
      null
  )
}

export default Liked;