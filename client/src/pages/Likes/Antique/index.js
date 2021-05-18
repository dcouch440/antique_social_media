import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router';
import waxImg from '../../../img/assets/waxSealImg.png';

import {
  AntiqueRow,
  Image,
  About
} from './styles';
import imageSizer from '../../../utils/imageSizer';

export default function Antique ({ antique }) {
  const history = useHistory();
  const [image] = antique.images;
  const { url, height, width } = image;
  const handleClick = () => history.push(`/antiques/${antique.id}`);
  const downsizedUrl = imageSizer({ url, height, width, decreesBy: 7 });

  return (
    <AntiqueRow onClick={handleClick}>
      <Image>
        <img src={downsizedUrl} alt={antique.name} />
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
