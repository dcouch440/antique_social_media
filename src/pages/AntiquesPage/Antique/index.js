import * as styled from './styles';
import Liked from '../../../components/Liked';
import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Antique = ({antique}) => {
  const history = useHistory()
  console.log(antique);
  const handleClick = (id) => {
    history.push(`/antiques/${id}`);
  }

  return (
    <styled.Antique
      onClick={(e) => handleClick(antique.id)}
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
  antique: PropTypes.object
};

export default withRouter(Antique);