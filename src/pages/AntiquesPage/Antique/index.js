import * as styled from './styles';
import Liked from '../../../components/Liked';
import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Antique = ({antique, ...props}) => {

  const ref = useRef()

  const handleClick = (e,id) => {
    if (e.target.class === ref.current.class){
      props.history.push(`/antiques/${id}`);
    }
  }
  return (
    <styled.Antique ref={ref}
      onClick={(e) => handleClick(e,antique.id)}
      dimensions={{height: antique.height, width: antique.width}}
    >
      <styled.Image src={antique.images[0].image_url} alt={antique.name} />
      <styled.AntiqueOverlay >
        <div>{antique.name}</div>
        <div>{antique.year}</div>
        <Liked isLiked={antique.liked} antiqueId={antique.id}/>
      </styled.AntiqueOverlay>

    </styled.Antique>
  )
}

Antique.propTypes = {
  name: PropTypes.object
};

export default withRouter(Antique);