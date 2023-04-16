/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Header from '../../components/Header';
import { applicationContext } from '../../contexts';

import './landingPage.css';

function LandingPage() {
  const { startCropMode } = useContext(applicationContext);
  return (
    <>
      <Header />
      <div className="landing-page-component-main-div">
        <h1 className="landing-page-component-main-h1">CROP ANYTHING YOU UPLOAD</h1>
        <button className="landing-page-component-main-button" onClick={startCropMode}>
          CROP
        </button>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default LandingPage;
