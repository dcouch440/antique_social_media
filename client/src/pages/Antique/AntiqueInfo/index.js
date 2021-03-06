import {
  About,
  Blog,
  ButtonContainer,
  LikedComponentContainer,
  Page,
  RouteButton,
  SlideShowSide,
  Tag
} from './styles';

import AntiqueImages from '../AntiqueImages';
import AntiqueLikes from '../AntiqueLikes';
import DeleteAntique from '../DeleteAntique';
import GoBackButton  from '../../../components/GoBackButton';
import Liked from '../../../components/Liked';
import { PropTypes } from 'prop-types';
import UploadIfCurrentUser from '../UploadIfCurrentUser';
import User from '../User';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function AntiqueInfo ({ antique, setRoom }) {
  const history = useHistory();
  const { year, name, antique_owner, body, id } = antique;
  const [likesChange, setLikesChange] = useState(0);
  const [show, setShow] = useState(false);
  const [newUpload, setNewUpload] = useState(false);
  const handleModalShowChange = () => setShow(prev => !prev);
  const handleRouteChange = () =>  history.push('/collections/' + antique_owner.id);
  const handleClick = () => history.goBack();

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
          images={antique.images}
          newUpload={newUpload}
          setNewUpload={setNewUpload}
        />
      </SlideShowSide>
      <About>
        <ButtonContainer>
          <RouteButton onClick={handleRouteChange}>
            User Collection
          </RouteButton>
          <RouteButton onClick={setRoom}>
            Start Chatting?
          </RouteButton>
        </ButtonContainer>
        <GoBackButton
          handleClick={handleClick}
          text='Back  ▶'
        />
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
    id: PropTypes.number
  }),
  setRoom: PropTypes.any
};