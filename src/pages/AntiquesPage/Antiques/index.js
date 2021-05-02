import React from 'react'
import Antique from '../Antique';
import PropTypes from 'prop-types';

const Antiques = ({antiques}) => antiques.map((antique, i) => (
  <Antique key={i} antique={antique} />
));

Antiques.propTypes = {
  antiques: PropTypes.array
};
export default Antiques;