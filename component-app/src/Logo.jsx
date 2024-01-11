import React from 'lib-app/react';
import pictureData from './logo.jpg';

export default function Logo() {
  return <img src={pictureData} style={{ width: '512px' }} />;
}
