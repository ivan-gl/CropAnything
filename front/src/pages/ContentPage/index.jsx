/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import { applicationContext } from '../../contexts';

import './contentPage.css';

function ContentPage() {
  const { startCropMode } = useContext(applicationContext);
  return (
    <>
      <Header />
      <div className="content-page-component-main-div">
        <Wrapper />
        <button className="content-page-component-main-button" onClick={startCropMode}>
          BACK
        </button>
      </div>
    </>
  );
}

export default ContentPage;
