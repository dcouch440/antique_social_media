import axios from 'axios';
import PropTypes from "prop-types";
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import {
  AvatarPicture,
  AvatarUpload,
  BlurOverlay,
  InputContainer,
  Message,
  PageContainer
} from './styles';

export default function Avatar ({ hideAvatar }) {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [message, setMessage] = useState('upload your avatar');
  const { currentUser } = useContext(Context);

  const handleChange = e => {
    const file = e.target.files[0];
    previewPicture(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewPicture = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

  const handleFileSubmit = () => {
    if (!selectedFile || !currentUser.id) {
      return;
    }
    setMessage('Uploading, one moment please...');
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };

    setSelectedFile('');
    setPreviewImage('');
    setFileInputState('');
  };

  const uploadImage = async file64 => {
    try {
      await axios
        .post(
          '/avatars',
          { file64 },
          { withCredentials: true }
        )
        .then(res => {
          if (res.status === 201) {
            setMessage('success!');
            setTimeout(() => {
              hideAvatar();
            }, 1000);
          } else {
            setMessage('there was a problem with that upload');
          }
        });
    } catch (err) {
      setMessage(err.message);
      console.log(err);
    }
  };

  return (
    <PageContainer>
      <BlurOverlay>
      </BlurOverlay>
      <AvatarUpload>
        <InputContainer>
          <input
            className="form-input"
            name="files"
            type="file"
            value={fileInputState}
            onChange={handleChange}
          />
          <button onClick={handleFileSubmit}>Submit</button>
        </InputContainer>
        {
          previewImage ?
            <AvatarPicture
              alt='avatar'
              src={previewImage}
            />
            :
            <Message>
              {message}
            </Message>
        }
      </AvatarUpload>
    </PageContainer>
  );
}
Avatar.propTypes = {
  hideAvatar: PropTypes.func
};
