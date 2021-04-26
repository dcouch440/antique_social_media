import React from 'react';
import AntiquesSlideShow from '../AntiqueSlideShow';
import * as styled from './styles';

const Antique = ({antique}) => {

  return (
    <styled.Container>

      <AntiquesSlideShow as={styled.AntiqueImage} />
      <div>
        <styled.Attribute>{antique.name}</styled.Attribute>
        <styled.Attribute>{antique.year}</styled.Attribute>
        <styled.Attribute>{antique.body}</styled.Attribute>
      </div>

    </styled.Container>
  )
}

export default Antique;