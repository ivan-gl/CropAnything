import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./landingPage.css";

const LandingPage = ({ startCropMode }) => {
  return (
    <>
      <Header />
      <div className="landing-page-component-main-div">
        <h1 className="landing-page-component-main-h1">CROP ANYTHING YOU UPLOAD</h1>
        <button className="landing-page-component-main-button" onClick={startCropMode}>
          CROP
        </button>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
