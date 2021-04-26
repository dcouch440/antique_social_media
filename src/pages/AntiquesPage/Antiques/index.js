import React from 'react'
import Antique from '../Antique';

const Antiques = ({antiques}) => antiques.map((antique, i) => (
  <Antique key={i} antique={antique} />
));

export default Antiques;