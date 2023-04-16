import React from 'react';
import UploadImage from '../UploadImage';
import CropImageAdder from '../CropImageAdder';

import './wrapper.css';

function Wrapper() {
  return (
    <div className="wrapper-component-main-div">
      <UploadImage />
      <CropImageAdder />
    </div>
  );
}

export default Wrapper;
