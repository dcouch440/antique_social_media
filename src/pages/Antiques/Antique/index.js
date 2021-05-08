import { AntiqueContainer, Image, AntiqueOverlay } from './styles';
import Liked from '../Liked';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Antique ({ antique, lazyRef, index })
{
  const history = useHistory();

  const handleClick = id => {
    history.push(`/antiques/${id}`);
  };

  const [image] = antique.images;

  return (
    <AntiqueContainer
      onClick={() => handleClick(antique.id)}
      dimensions={{ height: image.height, width: image.width }}
    >
      <Image ref={el => lazyRef.current[index] = el} src={image.image_url} alt={antique.name} />
      <AntiqueOverlay >
        <div>{antique.name}</div>
        <div>{antique.year}</div>
        <Liked antiqueId={antique.id}/>
      </AntiqueOverlay>

    </AntiqueContainer>
  );
}

Antique.propTypes = {
  antique: PropTypes.object,
  index: PropTypes.number,
  lazyRef: PropTypes.shape({
    current: PropTypes.object
  })
};
