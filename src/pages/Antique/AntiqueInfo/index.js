import AntiquesSlideShow from '../AntiqueSlideShow';
import User from '../User';
import { PropTypes } from 'prop-types';
import { About, Page, Tag, Blog, StartChatting } from './styles';

export default function AntiqueInfo ({ antique, setRoom }) {
  return (
    <Page>
      <AntiquesSlideShow antiqueImages={antique.images} />
      <About>
        <StartChatting onClick={setRoom}>
          Start Chatting ?
        </StartChatting>
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