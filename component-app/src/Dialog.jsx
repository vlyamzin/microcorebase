import React from 'lib-app/react';

const wrapperStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2000,
  height: '100%',
  backgroundColor: 'rgba(0,0,0,.5)',
  overflow: 'auto',
};
const boxStyle = {
  width: '30%',
  margin: '0 auto 50px',
  marginTop: '15vh',
  padding: '20px',
  backgroundColor: '#fff',
};

export default function Dialog({visible, switchVisible}) {
  const content = (
        <div style={wrapperStyle}>
          <div style={boxStyle}>
            <div>
              <p>What is your name ?</p>
              <input style={{ fontSize: '18px', lineHeight: 2 }} type="text" />
            </div>
            <button style={{ marginTop: '10px' }} onClick={() => switchVisible(false)}>
              close It!
            </button>
          </div>
        </div>
      );

    return visible && content;
}