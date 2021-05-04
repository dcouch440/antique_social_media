import {AntiqueContainer, Image, AntiqueOverlay} from './styles';
import Liked from '../Liked';
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Antique = ({antique}) => {
  const history = useHistory()
  const handleClick = (id) => history.push(`/antiques/${id}`);

  const [image] = antique.images

  return (
    <AntiqueContainer
      onClick={() => handleClick(antique.id)}
      dimensions={{height: image.height, width: image.width}}
    >
      <Image src={image.image_url} alt={antique.name} />
      <AntiqueOverlay >
        <div>{antique.name}</div>
        <div>{antique.year}</div>
        <Liked isLiked={antique.liked} antiqueId={antique.id}/>
      </AntiqueOverlay>

    </AntiqueContainer>
  )
}

Antique.propTypes = {
  antique: PropTypes.object
};

export default Antique