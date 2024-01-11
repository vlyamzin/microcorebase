import React, {useState} from 'lib-app/react';
import Logo from './src/Logo';
import Dialog from './src/Dialog';
import Button from './src/Button';

export default function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  function handleClick() {
    setDialogVisible(true);
  }

  function handleSwitchVisible(status) {
    setDialogVisible(status);
  }

  return (
      <div>
        <Logo />
        <br />
        <Button />
        <br />

        <button onClick={handleClick}>click to open dialog</button>
        <Dialog switchVisible={handleSwitchVisible} visible={dialogVisible} />
      </div>
  )
}
