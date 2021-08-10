import PropTypes from 'prop-types';

export default function ApiMapper ({ callData, component :Component, lazyRef = null }) {
  return callData.map((antique, i) => (
    <Component
      antique={antique}
      index={i}
      key={antique.id}
      lazyRef={lazyRef}
    />
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

