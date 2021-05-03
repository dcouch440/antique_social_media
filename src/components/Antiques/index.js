import React from 'react'
import PropTypes from 'prop-types';

const Antiques = ({antiques, Component}) => antiques.map((antique, i) => (
  <Component key={i} antique={antique} />
));

Antiques.propTypes = {
  antiques: PropTypes.array
};
export default Antiques;