import * as styled from './styles';
import Liked from '../../../components/Liked';
import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Antique = ({antique}) => {
  const history = useHistory()

  const handleClick = (id) => {
    history.push(`/antiques/${id}`);
  }
  const image = antique.images[0]
  return (
    <styled.Antique
      onClick={(e) => handleClick(antique.id)}
      dimensions={{height: image.height, width: image.width}}
    >
      <styled.Image src={image.image_url} alt={antique.name} />
      <styled.AntiqueOverlay >
        <div>{antique.name}</div>
        <div>{antique.year}</div>
        <Liked isLiked={antique.liked} antiqueId={antique.id}/>
      </styled.AntiqueOverlay>

    </styled.Antique>
  )
}

Antique.propTypes = {
  antique: PropTypes.object
};

export default withRouter(Antique);