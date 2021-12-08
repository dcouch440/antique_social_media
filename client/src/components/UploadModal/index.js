import {
  BlurContainer,
  CloseButton,
  ImageInput,
  ImageModal,
  ImageUpload,
  Message,
  PreviewImage,
  UploadButton
} from './styles';

import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";

export default function UploadModal ({
  modalShowChange,
  antique,
  setNewUpload,
  startMessageText,
  route,
  currentUser
}) {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [message, setMessage] = useState(startMessageText);

  const handleAfterUpload = event => {
    const { uploaded } = event;
    if (uploaded) {
      setTimeout(() => {
        modalShowChange(false);
        setNewUpload && setNewUpload(true);
      }, 2000);
    }
  };

  // if image show image.
  // if no image present. Show message.
  const imageOrMessage = () => {
    if (previewSource.length !== 0) {
      return (
        <PreviewImage
          alt="preview"
          src={previewSource}
        />
      );
    } else if (message.length) {
      return <Message>{message}</Message>;
    }
  };

  // set image states
  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewPicture(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  // read as url to preview image
  const previewPicture = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const isNotAValidSubmission = () => {
    // if no selected file or no current user return
    const fileOrUserNotFound = !selectedFile && currentUser.id;
    if (fileOrUserNotFound) { return true; }

    // if this is an antique upload
    if (antique) {
      // antique user_id must match the current user that iss logged in.
      if (antique.user_id !== currentUser.id) { return true; }
    }
    return false;
  };

  const handleFileSubmit = e => {
    e.preventDefault();

    if (isNotAValidSubmission()) { return; }

    setMessage('Uploading, one moment please...');
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };

    // set back to default.
    setSelectedFile('');
    setPreviewSource('');
    setFileInputState('');
  };

  const uploadImage = async base64EncodedImage => {
    const send = {
      file64: base64EncodedImage,
      user_id: currentUser.id
    };

    // checking route
    if (route === '/antiques/images') {
      send.antique_id = antique.id;
    }

    await axios
      .post(route, send)
      .then(res => {
        if (res.status === 201) {
          setPreviewSource('');
          handleAfterUpload({ uploaded: true, message: 'Success!' });
        } else {
          setPreviewSource('');
          handleAfterUpload({ uploaded: false, message: res.message });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <BlurContainer />
      <ImageModal>
        <CloseButton onClick={modalShowChange}>Exit Upload</CloseButton>
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
        {imageOrMessage()}
      </ImageModal>
    </>
  );
}

UploadModal.propTypes = {
  antique: PropTypes.object,
  currentUser: PropTypes.any.isRequired,
  modalShowChange: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  setNewUpload: PropTypes.func,
  startMessageText: PropTypes.string.isRequired
};
