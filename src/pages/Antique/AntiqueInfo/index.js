import AntiquesSlideShow from '../AntiqueSlideShow';
import User from '../User';
import { PropTypes } from 'prop-types';
import { About, Page, Tag, Blog, StartChatting } from './styles';
import AntiqueLikes from '../AntiqueLikes';

export default function AntiqueInfo ({ antique, setRoom }) {
  const { year, name, antique_owner, images, likes, body } = antique;
  return (
    <Page>
      <AntiquesSlideShow antiqueImages={images} />
      <About>
        <StartChatting onClick={setRoom}>
          Start Chatting ?
        </StartChatting>
        <User ownerInfo={antique_owner}/>
        <AntiqueLikes likes={likes} />
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