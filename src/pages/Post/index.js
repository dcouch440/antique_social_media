import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PageTransition from '../../Framer/PageTransition';
import Form from './Form';
import {
  Page,
  ImagePreview,
  FormContainer,
  NoImage,
  NoImageCaption,
  ImageInput,
  PreviewImage
} from './styles';

export default function Post () {
  const [fileInputState, setFileInputState] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const history = useHistory();

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
    await axios.post(
      '/antiques', uploadData,
      { withCredentials: true }
    )
      .then(res => res.status === 201 && history.push(
        `/antiques/${res.data.id}`
      ))
      .catch(err => console.log(err));
  };

  const handleSubmit = formData => {
    if (!selectedFile) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    setSelectedFile(undefined);
    reader.onload = () => {
      uploadImage({
        file64: reader.result,
        ...formData
      });
    };
  };

  return (
    <PageTransition>

      <Page>
        <ImagePreview>
          <ImageInput
            id="file-input"
            type="file"
            name="files"
            onChange={handleImageInputChange}
            value={fileInputState}
            className="form-input"
          />
          {
            previewImage ?

              <PreviewImage src={previewImage} alt='preview'/>

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