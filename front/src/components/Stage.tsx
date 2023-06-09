// Copyright (c) Meta Platforms, Inc. and affiliates.
// All rights reserved.

// This source code is licensed under the license found in the
// LICENSE file in the root directory of this source tree.

import React, { useContext } from 'react';
import * as _ from 'underscore';
import Tool from './Tool';
import { modelInputProps } from './helpers/Interfaces';
import AppContext from './hooks/createContext';
import ShowMaskImage from './ShowMaskImage';

const Stage = () => {
  const {
    clicks: [, setClicks],
    image: [image],
    maskImg: [maskImg],
  } = useContext(AppContext)!;

  const getClick = (x: number, y: number): modelInputProps => {
    const clickType = 1;
    return { x, y, clickType };
  };

  // Get mouse position and scale the (x, y) coordinates back to the natural
  // scale of the image. Update the state of clicks with setClicks to trigger
  // the ONNX model to run and generate a new mask via a useEffect in App.tsx
  const handleMouseMove = _.throttle((e: any) => {
    let el = e.nativeEvent.target;
    const rect = el.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    const imageScale = image ? image.width / el.offsetWidth : 1;
    x *= imageScale;
    y *= imageScale;
    console.log(x, y, imageScale);

    const click = getClick(x, y);
    if (click) setClicks([click]);
    console.log(click);
  }, 20);

  return (
    <div className={`w-full h-[100%] flex justify-center items-center p-3`}>
      <div className={`w-[50%] h-[90%] flex justify-center items-center`}>
        <ShowMaskImage mask={maskImg} />
      </div>
      <div className={`w-[50%] h-[90%] flex justify-center items-center relative`}>
        <Tool handleMouseMove={handleMouseMove} />
      </div>
    </div>
  );
};

export default Stage;
