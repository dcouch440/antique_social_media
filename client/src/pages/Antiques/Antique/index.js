import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
import Liked from '../../../components/Liked';
import imageSizer from '../../../utils/imageSizer';
import {
  AntiqueContainer,
  AntiqueOverlay,
  OverlayText
} from './styles';


export default function Antique ({ antique }) {
  const history = useHistory();
  const [image] = antique.images;
  const { secure_url, height, width } = image;
  const handleClick = id => history.push(`/antiques/${id}`);
  const downsizedUrl = imageSizer({
    url: secure_url, height, width, decreesBy: 5
  });

  return (
    <AntiqueContainer
      dimensions={{
        height, width
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
        <Liked antiqueId={antique.id} />
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
