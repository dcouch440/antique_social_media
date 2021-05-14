import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router';
import waxImg from '../../../img/assets/waxSealImg.png';

import {
  AntiqueRow,
  Image,
  About
} from './styles';

export default function Antique ({ antique }) {
  const history = useHistory();
  const [image] = antique.images;

  const handleClick = () => history.push(`/antiques/${antique.id}`);

  return (
    <AntiqueRow onClick={handleClick}>
      <Image>
        <img src={image.url} alt={antique.name} />
      </Image>
      <About>
        <div>Name: {antique.name}</div>
        <div>Title: {antique.title}</div>
        <div> Posted: {moment(antique.created_at).fromNow()}</div>
        <img src={waxImg} alt='wax seal' />
      </About>
    </AntiqueRow>
  );
}

Antique.defaultProps = {
  antique: {
    images: [{ url: '' }]
  }
};

Antique.propTypes = {
  antique: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.isRequired,
    name: PropTypes.isRequired,
    title: PropTypes.string.isRequired
  })
};
