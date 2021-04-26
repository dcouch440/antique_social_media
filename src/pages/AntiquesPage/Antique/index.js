import * as styled from './styles';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Antique = ({antique, ...props}) => {

  const handleClick = (id) => {
    props.history.push(`/antiques/${id}`);
  }

  return (
    <styled.Antique
      onClick={() => handleClick(antique.id)}
      dimensions={{height: antique.height, width: antique.width}}
    >
      <img src={antique.image} alt="name" />

      <styled.AntiqueOverlay >
        <p>{antique.name}</p>
        <p>{antique.year}</p>
      </styled.AntiqueOverlay>

    </styled.Antique>
  )
}

export default withRouter(Antique);