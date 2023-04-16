import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import "./contentPage.css";

const ContentPage = ({ startCropMode }) => {
  return (
    <>
      <Header />
      <div className="content-page-component-main-div">
        <Wrapper />
        <button className="content-page-component-main-button" onClick={startCropMode}>
          BACK
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ContentPage;
