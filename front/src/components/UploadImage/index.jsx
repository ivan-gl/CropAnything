import React, { useContext } from 'react';
import { applicationContext } from '../../contexts';
import './uploadImage.css';

function UploadImage() {
  const { uploadedImage, setUploadedImage } = useContext(applicationContext);
  return (
    <div className="upload-image-component-main-div">
      {uploadedImage && (
        <img
          className="upload-photo-preview"
          src={URL.createObjectURL(uploadedImage)}
          alt="fotografija"
        />
      )}
      <label htmlFor="avatar" className="photo-input">
        {!uploadedImage && <span>Choose an Image to Upload</span>}
        {uploadedImage && <span>Change the Image</span>}
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(event) => {
            setUploadedImage(event.target.files[0]);
          }}
        />
      </label>
    </div>
  );
}

export default UploadImage;
