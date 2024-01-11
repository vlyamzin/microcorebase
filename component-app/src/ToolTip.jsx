import React from 'lib-app/react';
import css from './tool-tip.css';

export default function Tooltip({content, message}) {
  return (
    <div className="tool-tip" data-content={message}>
      {content}
    </div>

  )
}