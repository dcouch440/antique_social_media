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
    const image = images[0].url;

    return (
      <Antique key={index} onClick={e => handleClick(e, antique.id)}>
        <img src={image} alt="antique" />
      </Antique>
    );
  });

  return mappedAntiques;
}