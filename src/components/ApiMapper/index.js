import PropTypes from 'prop-types';

export default function ApiMapper ({callData, component :Component, lazyRef = null})
{
  return callData.map((antique, i) => (
    <Component key={i} lazyRef={lazyRef} index={i} antique={antique} />
  ));
}

ApiMapper.propTypes = {
  callData: PropTypes.array
};