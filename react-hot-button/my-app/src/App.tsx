import { useState } from 'react';
import './App.css';
import './index.css';
import { HotButton } from './HotButton';

function App() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(value + 1);
  }

  return <HotButton clicks={value} onButtonClick={handleClick} />;
}

export default App;
