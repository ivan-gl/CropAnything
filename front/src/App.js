import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/ContentPage";
import "./App.css";

const App = () => {
  const [crop, setCrop] = useState(true);

  const startCropMode = () => {
    setCrop(!crop);
  };

  return (
    <>
      <div className="app-component-main-div">
        {crop ? (
          <LandingPage startCropMode={startCropMode} />
        ) : (
          <ContentPage startCropMode={startCropMode} />
        )}
      </div>
    </>
  );
};

export default App;
