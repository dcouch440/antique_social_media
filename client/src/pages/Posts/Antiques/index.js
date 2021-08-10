import PropTypes from "prop-types";
import { useHistory } from 'react-router';
import { Antique } from './styles';

export default function Antiques ({ antiques }) {
  const history = useHistory();

  const handleClick = (e, id) => {
    e.stopPropagation();
    history.push(`/antiques/${id}`);
  };

  const mappedAntiques = antiques.map((antique, index) => {
    const { images } = antique;
    return (
      <Antique
        key={index}
        onClick={e => handleClick(e, antique.id)}
      >
        <img
          alt="antique"
          src={images[0].secure_url}
        />
      </Antique>
    );
  });

  return mappedAntiques;
}

Antiques.propTypes = {
  antiques: PropTypes.object
};
