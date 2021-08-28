import PropTypes from "prop-types";
import { useState } from "react";
import Upload from "../Upload";
import {
  BlurContainer,
  CloseButton,
  ImageModal,
  Message
} from './styles';


export default function Modal ({ modalShowChange, antique, setNewUpload }) {
  const [previewSource, setPreviewSource] = useState('');
  const [message, setMessage] = useState('Pick a file and upload');

  const handleAfterUpload = event => {
    const { uploaded, message } = event;
    if (uploaded) {
      setMessage(message);
      setTimeout(() => {
        modalShowChange(false);
        setNewUpload(true);
      }, 2000);
    } else {
      setMessage(message);
    }
  };

  const imageOrMessage = () => {
    if (previewSource.length !== 0) {
      return (
        <img
          alt="zap"
          src={previewSource}
        />
      );
    } else if (message.length) {
      return <Message>{message}</Message>;
    }
  };

  return (
    <>
      <BlurContainer>
      </BlurContainer>
      <ImageModal>
        <CloseButton onClick={modalShowChange}>Exit Upload</CloseButton>
        <Upload
          afterUpload={handleAfterUpload}
          antique={antique}
          setMessage={setMessage}
          setPreviewSource={setPreviewSource}
        />
        {imageOrMessage()}
      </ImageModal>
    </>
  );
}

Modal.propTypes = {
  antique: PropTypes.object,
  modalShowChange: PropTypes.func,
  setNewUpload: PropTypes.func
};
