/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';

import './contentPage.css';

function ContentPage() {
  return (
    <>
      <Header />
      <div className="content-page-component-main-div">
        <Wrapper />
        <button className="content-page-component-main-button">BACK</button>
      </div>
    </>
  );
}

export default ContentPage;
