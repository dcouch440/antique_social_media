import React from 'react';
import { AntiqueRow, Image, About } from './styles';
import moment from 'moment';
const Antique = ({antique}) => {
  console.log(antique);
  const [image] = antique.images
  return (
    <AntiqueRow>
      <Image src={image.image_url} alt={antique.name} />
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
  )
}

export default Antique;