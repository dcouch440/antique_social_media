import React from 'react';
import AntiquesSlideShow from '../AntiqueSlideShow';
import * as styles from './styles';

const Antique = ({antique}) => {

  return (
    <styles.Container>

      <AntiquesSlideShow  />
      <div>
        <styles.Attribute>{antique.name}</styles.Attribute>
        <styles.Attribute>{antique.year}</styles.Attribute>
        <styles.Attribute>{antique.body}</styles.Attribute>
      </div>

    </styles.Container>
  )
}

export default Antique;