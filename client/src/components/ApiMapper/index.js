import PropTypes from 'prop-types';

export default function ApiMapper ({ callData, component :Component, lazyRef = null }) {
  return callData.map((antique, i) => (
    <Component key={antique.id} lazyRef={lazyRef} index={i} antique={antique} />
  ));
}

ApiMapper.propTypes = {
  callData: PropTypes.array,
  component: PropTypes.any,
  lazyRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  ])
};

