import { useState } from 'react';
import { PropTypes } from 'prop-types';
import User from './User';
import AntiqueImages from './AntiqueImages';
import AntiqueLikes from './AntiqueLikes';
import Liked from '../../components/Liked';
import UploadIfCurrentUser from './UploadIfCurrentUser';
import DeleteImage from './DeleteAntique';

import {
  LikedComponentContainer,
  About,
  Page,
  Tag,
  Blog,
  StartChatting,
  SlideShowSide,
} from './styles';

export default function AntiqueInfo ({ antique, setRoom }) {
  const { year, name, antique_owner, body, id } = antique;
  const [likesChange, setLikesChange] = useState(0);
  const [show, setShow] = useState(false);
  const [newUpload, setNewUpload] = useState(false);
  const handleModalShowChange = () => setShow(prev => !prev);


  return (
    <Page>
      <DeleteImage antique={antique}/>
      <UploadIfCurrentUser
        setNewUpload={setNewUpload}
        handleModalShowChange={handleModalShowChange}
        show={show}
        antique={antique}
      />
      <SlideShowSide>
        <LikedComponentContainer>
          <Liked onLikesChange={setLikesChange} antiqueId={id} />
        </LikedComponentContainer>
        <AntiqueImages newUpload={newUpload} setNewUpload={setNewUpload} antiqueId={id}/>
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