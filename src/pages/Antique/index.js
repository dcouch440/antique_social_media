import AntiquesSlideShow from './AntiqueSlideShow';
import User from './User';
import { PropTypes } from 'prop-types';
import { LikedComponentContainer, About, Page, Tag, Blog, StartChatting, SlideShowSide } from './styles';
import AntiqueLikes from './AntiqueLikes';
import Liked from '../../components/Liked';
import { useState } from 'react';

export default function AntiqueInfo ({ antique, setRoom }) {
  const { year, name, antique_owner, images, body, id } = antique;
  const [likesChange, setLikesChange] = useState(0);

  return (
    <Page>
      <SlideShowSide>
        <LikedComponentContainer>
          <Liked onLikesChange={setLikesChange} antiqueId={id} />
        </LikedComponentContainer>
        <AntiquesSlideShow antiqueImages={images} />
      </SlideShowSide>
      <About>
        <StartChatting onClick={setRoom}>
          Start Chatting ?
        </StartChatting>
        <User ownerInfo={antique_owner}/>
        <AntiqueLikes antiqueId={id} likesChange={likesChange} />
        <Blog>
          <div>
            <Tag>Name: </Tag>{name}
          </div>
          <div>
            <Tag>Year: </Tag>{year}
          </div>
          <div>
            <div>
              <Tag>A Bit About This Item: </Tag>
            </div>
            {body}
          </div>
        </Blog>
      </About>
    </Page>
  );
}

AntiqueInfo.propTypes = {
  antique: PropTypes.shape({
    antique_owner: PropTypes.object,
    body: PropTypes.string,
    images: PropTypes.array,
    name: PropTypes.string,
    year: PropTypes.number
  }),
  setRoom: PropTypes.any
};