import { AntiqueContainer, AntiqueOverlay, OverlayText } from './styles';

import Liked from '../../../components/Liked';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

export default function Antique ({ antique, lazyRef, index }) {
  const history = useHistory();
  const [image] = antique.images;

  const handleClick = id => {
    history.push(`/antiques/${id}`);
  };

  return (
    <AntiqueContainer
      onClick={() => handleClick(antique.id)}
      dimensions={{ height: image.height, width: image.width }}
      ref={el => lazyRef.current[index] = el}
    >
      <RenderSmoothImage objectFit={'cover'} src={image.image_url} alt={antique.name}/>
      <AntiqueOverlay>
        <OverlayText>
          <div>{antique.name}</div>
          <div>{antique.year}</div>
        </OverlayText>
        <Liked antiqueId={antique.id}/>
      </AntiqueOverlay>
    </AntiqueContainer>
  );
}

Antique.propTypes = {
  antique: PropTypes.object,
  index: PropTypes.number,
  lazyRef: PropTypes.shape({
    current: PropTypes.any
  })
};
