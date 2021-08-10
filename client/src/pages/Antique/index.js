import { PropTypes } from 'prop-types';
import { useState } from 'react';
import Liked from '../../components/Liked';
import AntiqueImages from './AntiqueImages';
import AntiqueLikes from './AntiqueLikes';
import DeleteImage from './DeleteAntique';
import {
  About,
  Blog,
  LikedComponentContainer,
  Page,
  SlideShowSide,
  StartChatting,
  Tag
} from './styles';
import UploadIfCurrentUser from './UploadIfCurrentUser';
import User from './User';

export default function AntiqueInfo ({ antique, setRoom }) {
  const { year, name, antique_owner, body, id } = antique;
  const [likesChange, setLikesChange] = useState(0);
  const [show, setShow] = useState(false);
  const [newUpload, setNewUpload] = useState(false);
  const handleModalShowChange = () => setShow(prev => !prev);

  return (
    <Page>
      <DeleteImage antique={antique} />
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