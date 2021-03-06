import moment from 'moment';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import waxImg from '../../../img/assets/waxSealImg.png';
import imageSizer from '../../../utils/imageSizer';
import {
  About,
  AntiqueRow,
  Image
} from './styles';


export default function Antique ({ antique }) {
  const history = useHistory();
  const [image] = antique.images;
  const { secure_url, height, width } = image;
  const handleClick = () => history.push(`/antiques/${antique.id}`);
  const downsizedUrl = imageSizer({ url: secure_url, height, width, decreesBy: 7 });

  return (
    <AntiqueRow onClick={handleClick}>
      <Image>
        <img
          alt={antique.name}
          src={downsizedUrl}
        />
      </Image>
      <About>
        <div>Name: {antique.name}</div>
        <div>Title: {antique.title}</div>
        <div> Posted: {moment(antique.created_at).fromNow()}</div>
        <img
          alt='wax seal'
          src={waxImg}
        />
      </About>
    </AntiqueRow>
  );
}

Antique.propTypes = {
  antique: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.isRequired,
    name: PropTypes.isRequired,
    title: PropTypes.string.isRequired
  })
};
