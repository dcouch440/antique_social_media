import React from 'react';
import AntiquesSlideShow from '../AntiqueSlideShow';
import User from '../User';
import { About, Page, Tag, Blog} from './styles';

const AntiqueInfo = ({antique}) => (
  <Page>
    <AntiquesSlideShow antiqueImages={antique.images} />
    <About>
      <User ownerInfo={antique.antique_owner}/>
      <Blog>
        <div>
          <Tag>Name: </Tag>{antique.name}
        </div>
        <div>
        <Tag>Year: </Tag>{antique.year}
        </div>
        <div>
          <div>
            <Tag>A Bit About This Item: </Tag>
          </div>
          {antique.body}
        </div>
      </Blog>
    </About>
  </Page>
);


export default AntiqueInfo;