import axios from 'axios';
import PropTypes from "prop-types";
import React, { useContext, useState } from 'react';
import { Context } from '../../../Context';
import {
  ImageInput,
  ImageUpload,
  UploadButton
} from './styles';


export default function Upload ({ antique, afterUpload, setPreviewSource, setMessage }) {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const { currentUser } = useContext(Context);

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewPicture(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewPicture = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileSubmit = e => {
    e.preventDefault();
    if (!selectedFile) {
      return;
    }
    if (antique.user_id !== currentUser.id) {
      return;
    }
    setMessage('Uploading, one moment please...');
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };

    setSelectedFile('');
    setPreviewSource('');
    setFileInputState('');
  };

  const uploadImage = async base64EncodedImage => {
    try {
      axios
        .post('/images',{
          file64: base64EncodedImage,
          antique_id: antique.id
        })
        .then(res => {
          if (res.status === 201) {
            setPreviewSource('');
            afterUpload({ uploaded: true, message: 'Success!' });
          } else {
            setPreviewSource('');
            afterUpload({ uploaded: false, message: res.message });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ImageUpload>
        <form onSubmit={handleFileSubmit}>
          <ImageInput
            className="form-input"
            id="file-input"
            name="files"
            type="file"
            value={fileInputState}
            onChange={handleFileInputChange}
          />
          <UploadButton>submit</UploadButton>
        </form>
      </ImageUpload>
    </div>
  );
}

Upload.propTypes = {
  afterUpload: PropTypes.func,
  antique: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.number
  }),
  setMessage: PropTypes.func,
  setPreviewSource: PropTypes.func
};
