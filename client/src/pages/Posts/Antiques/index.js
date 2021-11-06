import { Antique } from './styles';
import PropTypes from "prop-types";
import attachImageIfNotPresent from "../../../utils/attachImageIfNotPresent";
import imageSizer from "../../../utils/imageSizer";
import { useHistory } from 'react-router';

export default function Antiques ({ antiques }) {
  const history = useHistory();

  const handleClick = (e, id) => {
    e.stopPropagation();
    history.push(`/antiques/${id}`);
  };

  const mappedAntiques = antiques.map((antique, index) => {
    const { images } = antique;
    const { secure_url, width, height } = images?.[0] ?? attachImageIfNotPresent(antique);
    const smallerImage = imageSizer({ url: secure_url, width, height, decreesBy: 5 });
    return (
      <Antique
        key={index}
        onClick={e => handleClick(e, antique.id)}
      >
        <img
          alt="antique"
          src={smallerImage}
        />
      </Antique>
    );
  });

  return mappedAntiques;
}

Antiques.propTypes = {
  antiques: PropTypes.array
};
