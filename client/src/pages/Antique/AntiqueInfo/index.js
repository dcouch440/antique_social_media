import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Liked from '../../../components/Liked';
import AntiqueImages from '../AntiqueImages';
import AntiqueLikes from '../AntiqueLikes';
import DeleteAntique from '../DeleteAntique';
import UploadIfCurrentUser from '../UploadIfCurrentUser';
import User from '../User';
import {
  About,
  Blog,
  CollectionsButton,
  LikedComponentContainer,
  Page,
  SlideShowSide,
  StartChatting,
  Tag
} from './styles';


export default function AntiqueInfo ({ antique, setRoom }) {
  const history = useHistory();
  const { year, name, antique_owner, body, id } = antique;
  const [likesChange, setLikesChange] = useState(0);
  const [show, setShow] = useState(false);
  const [newUpload, setNewUpload] = useState(false);
  const handleModalShowChange = () => setShow(prev => !prev);
  const handleRouteChange = () =>  history.push('/collections/' + antique_owner.id);

  return (
    <Page>
      <DeleteAntique antique={antique} />
      <UploadIfCurrentUser
        antique={antique}
        handleModalShowChange={handleModalShowChange}
        setNewUpload={setNewUpload}
        show={show}
      />
      <SlideShowSide>
        <LikedComponentContainer>
          <Liked
            antiqueId={id}
            onLikesChange={setLikesChange}
          />
        </LikedComponentContainer>
        <AntiqueImages
          antiqueId={id}
          newUpload={newUpload}
          setNewUpload={setNewUpload}
        />
      </SlideShowSide>
      <About>
        <CollectionsButton onClick={handleRouteChange}>
          User Collection
        </CollectionsButton>
        <StartChatting onClick={setRoom}>
          Start Chatting ?
        </StartChatting>
        <User ownerInfo={antique_owner} />
        <AntiqueLikes
          antiqueId={id}
          likesChange={likesChange}
        />
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
    year: PropTypes.number,
    string: PropTypes.string,
    id: PropTypes.string
  }),
  setRoom: PropTypes.any
};