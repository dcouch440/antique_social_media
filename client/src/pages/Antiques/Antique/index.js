import 'render-smooth-image-react/build/style.css';

import {
  AntiqueContainer,
  AntiqueOverlay,
  LikedContainer,
  OverlayText
} from './styles';

import Liked from '../../../components/Liked';
import PropTypes from 'prop-types';
import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import attachImageIfNotPresent from '../../../utils/attachImageIfNotPresent';
import imageSizer from '../../../utils/imageSizer';
import { useHistory } from 'react-router-dom';

export default function Antique ({ antique }) {
  const history = useHistory();
  const image = antique.images[0] ?? attachImageIfNotPresent(antique);

  const { secure_url, height, width } = image;
  const handleClick = id => history.push(`/antiques/${id}`);
  const downsizedUrl = imageSizer({
    url: secure_url, height, width, decreesBy: 5
  });

  return (
    <AntiqueContainer
      dimensions={{
        height,
        width
      }}
      onClick={() => handleClick(antique.id)}
    >
      <RenderSmoothImage
        alt={antique.name}
        loading='lazy'
        objectFit='cover'
        src={downsizedUrl}
      />
      <AntiqueOverlay>
        <OverlayText>
          <div>{antique.name}</div>
          <div>{antique.year}</div>
        </OverlayText>
        <LikedContainer>
          <Liked antiqueId={antique.id} />
        </LikedContainer>
      </AntiqueOverlay>
    </AntiqueContainer>
  );
}

Antique.defaultProps = {
  antique: {
    images: [{
      url: ''
    }]
  }
};

Antique.propTypes = {
  antique: PropTypes.object,
  index: PropTypes.number,
};
