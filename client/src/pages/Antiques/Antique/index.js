import Liked from '../../../components/Liked';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import {
  AntiqueContainer,
  AntiqueOverlay,
  OverlayText
} from './styles';
import imageSizer from '../../../utils/imageSizer';

export default function Antique ({ antique, lazyRef, index }) {
  const history = useHistory();
  const [image] = antique.images;
  const { secure_url, height, width } = image;
  const handleClick = id => history.push(`/antiques/${id}`);
  const downsizedUrl = imageSizer({ url: secure_url, height, width, decreesBy: 5 });
  return (
    <AntiqueContainer
      onClick={() => handleClick(antique.id)}
      dimensions={{ height, width }}
      ref={el => lazyRef.current[index] = el}
    >
      <RenderSmoothImage objectFit={'cover'} src={downsizedUrl} alt={antique.name}/>
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

Antique.defaultProps = {
  antique: {
    images: [{ url: '' }]
  }
};

Antique.propTypes = {
  antique: PropTypes.object,
  index: PropTypes.number,
  lazyRef: PropTypes.shape({
    current: PropTypes.any
  })
};
