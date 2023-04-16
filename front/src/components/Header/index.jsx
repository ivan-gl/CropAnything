import React from 'react';
import './header.css';
import SvgComponent from '../SvgComponent';

function Header() {
  return (
    <div className="header-component-main-div">
      <SvgComponent color="blue" side="left" />
      <h2 className="header-component-main-h2">CropAnything</h2>
      <SvgComponent color="red" side="right" />
    </div>
  );
}

export default Header;
