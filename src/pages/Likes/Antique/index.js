import React from 'react';
import { AntiqueRow, Image, About } from './styles';
import moment from 'moment';
import { useHistory } from 'react-router';

const Antique = ({antique}) => {
  const history = useHistory();
  const [image] = antique.images;

  const handleClick = () => history.push(`/antiques/${antique.id}`);

  return (
    <AntiqueRow>
      <Image onClick={handleClick} src={image.image_url} alt={antique.name} />
      <About>
        <div>
          Name: {antique.name}
        </div>
        <div>
          Title: {antique.title}
        </div>
        <div>
          Posted: {moment(antique.created_at).fromNow()}
        </div>
      </About>
    </AntiqueRow>
  );
};

export default Antique;