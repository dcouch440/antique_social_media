import React from 'react';
import PropTypes from 'prop-types';

const ApiMapper = ({callData, component :Component, lazyRef = null}) => callData.map((antique, i) => (
  <Component key={i} lazyRef={lazyRef} index={i} antique={antique} />
));

ApiMapper.propTypes = {
  callData: PropTypes.array
};

export default ApiMapper;