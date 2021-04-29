import * as styled from './styles';
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Antique = ({antique, ...props}) => {

  const handleClick = (id) => {
    props.history.push(`/antiques/${id}`);
  }
  console.log(antique.images);
  return (
    <styled.Antique
      onClick={() => handleClick(antique.id)}
      dimensions={{height: antique.height, width: antique.width}}
    >
      <styled.Image src={antique.images[0].image_url} alt={antique.name} />
      <styled.AntiqueOverlay >
        <div>{antique.name}</div>
        <div>{antique.year}</div>
      </styled.AntiqueOverlay>

    </styled.Antique>
  )
}

Antique.propTypes = {
  name: PropTypes.object
};

export default withRouter(Antique);