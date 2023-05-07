import React from 'react';

const ShowMaskImage = ({ mask, uploadedImage }: any) => {
  return <img src={mask?.src} alt="kropovana slika" />;
};

export default ShowMaskImage;
