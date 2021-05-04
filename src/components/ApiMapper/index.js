import React from 'react'
import PropTypes from 'prop-types';

const ApiMapper = ({callData, component :Component}) => callData.map((antique, i) => (
  <Component key={i} antique={antique} />
));

ApiMapper.propTypes = {
  callData: PropTypes.array
};

export default ApiMapper;