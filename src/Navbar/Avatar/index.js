import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import {
  PageContainer,
  BlurOverlay,
  AvatarPicture,
  AvatarUpload,
  InputContainer,
  Message
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
              type="file"
              name="files"
              onChange={handleChange}
              value={fileInputState}
              className="form-input"
            />
            <button onClick={handleFileSubmit}>Submit</button>
        </InputContainer>
        {
          previewImage ?
            <AvatarPicture src={previewImage} alt='avatar' />
            :
            <Message>
              {message}
            </Message>
        }
      </AvatarUpload>
    </PageContainer>
  );
}