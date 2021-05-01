import React, { useState } from 'react';
import axios from 'axios';

//  UPLOAD ON ITS OWN -------------------------
const Upload = ({antiqueId}) => {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewPicture(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  }

  const previewPicture = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleFileSubmit = (e) => {

    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };

    setSelectedFile('');
    setPreviewSource('');
    setFileInputState('');

  }

  const uploadImage = async (base64EncodedImage) => {
    try
    {
      await axios.post('/images/upload',{
          file: base64EncodedImage,
          antique_id: antiqueId
      });
    }

    catch (err) { console.error(err); }
  }

  return (
    <div className="image-upload">
      <form onSubmit={handleFileSubmit}>
        <input
          id="file-input"
          type="file"
          name="files"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          SUBMIT
        </button>
      </form>
      {previewSource&& <img src={previewSource} alt="zap" />}
    </div>
  );
};


export default Upload;