import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import { useHistory } from 'react-router';
import { Context } from '../../Context';
import PageTransition from '../../Framer/PageTransition';
import Form from './Form';
import {
  ErrorMessage,
  FormContainer,
  ImageInput,
  ImagePreview,
  NoImage,
  NoImageCaption,
  Page,
  PreviewImage
} from './styles';


export default function Post () {
  const [fileInputState, setFileInputState] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [{ uploading, message }, setMessage] = useState({ uploading: false, message: '' });
  const history = useHistory();
  const { currentUser } = useContext(Context);

  useEffect(() => {
    if (!uploading && message.length) {
      setTimeout(() => {
        setMessage({ uploading: false, message: '' });
      }, 3000);
    }
  }, [message.length, uploading]);

  const handleImageInputChange = e => {
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

  const uploadImage = async uploadData => {
    await axios
      .post('/antiques',
        uploadData,
        { withCredentials: true }
      )
      .then(res => {
        if (res.status === 201) {
          history.push(`/antiques/${res.data.id}`);
          setMessage({ uploading: false, message: '' });
        } else {
          setMessage({ uploading: false, message: res.data.message });
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          setMessage({ uploading: false, message: 'Unauthorized' });
        } else {
          setMessage({ uploading: false, message: err.response.data.message });
        }
        console.log(err);
      });
  };

  const handleSubmit = formData => {
    if (!selectedFile || uploading) {
      return;
    }
    setMessage({ uploading: true, message: 'Uploading' });
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      uploadImage({
        file64: reader.result,
        ...formData,
        user_id: currentUser.id
      });
    };
  };

  return (
    <PageTransition>
      {message&& <ErrorMessage><span>{message}</span></ErrorMessage>}
      <Page>
        <ImagePreview>
          <ImageInput
            className="form-input"
            id="file-input"
            name="files"
            type="file"
            value={fileInputState}
            onChange={handleImageInputChange}
          />
          {
            previewImage ?

              <PreviewImage
                alt='preview'
                src={previewImage}
              />

              : // NO IMAGE

              <NoImageCaption>
                <NoImage>No Image</NoImage>
                <div>
                  We require at least one image for your antique!
                </div>
              </NoImageCaption>
          }
        </ImagePreview>
        <FormContainer>
          <Form onSubmit={handleSubmit} />
        </FormContainer>
      </Page>
    </PageTransition>
  );
}