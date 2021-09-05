import PropTypes from 'prop-types';

export default function ApiMapper ({ callData, component: Component }) {
  return callData.map((antique, i) => (
    <Component
      antique={antique}
      index={i}
      key={antique.id}
    />
  ));
}

ApiMapper.propTypes = {
  callData: PropTypes.array,
  component: PropTypes.any,
};

