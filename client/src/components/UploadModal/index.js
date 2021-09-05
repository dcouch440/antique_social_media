import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
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

  const handleFileSubmit = e => {
    e.preventDefault();

    // if no selected file or no current user return
    if (!selectedFile && currentUser.id) { return; }

    // if this is an antique upload
    if (antique) {
      // antique user_id must match the current user that iss logged in.
      if ((antique.user_id !== currentUser.id)) { return; }
    }

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

  const uploadImage = base64EncodedImage => {
    try {
      let send = {};

      // checking route
      if (route === '/avatars') {
        send = {
          file64: base64EncodedImage,
          user_id: currentUser.id
        };
      }
      // checking route
      if (route === '/images') {
        send = {
          file64: base64EncodedImage,
          user_id: currentUser.id,
          antique_id: antique.id
        };
      }

      axios
        .post(route, send)
        .then(res => {
          if (res.status === 201) {
            setPreviewSource('');
            handleAfterUpload({ uploaded: true, message: 'Success!' });
          } else {
            setPreviewSource('');
            handleAfterUpload({ uploaded: false, message: res.message });
          }
        });
    } catch (err) {
      console.log(err);
    }
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