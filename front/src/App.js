import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ContentPage from './pages/ContentPage';
import { ApplicationProvider } from './contexts';

import './App.css';

function App() {
  const [crop, setCrop] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);

  const startCropMode = () => {
    setCrop(!crop);
  };

  return (
    <div className="app-component-main-div">
      <ApplicationProvider value={{ startCropMode, uploadedImage, setUploadedImage }}>
        {crop ? <LandingPage /> : <ContentPage />}
      </ApplicationProvider>
    </div>
  );
}

export default App;
