import React from 'react';
import ReactDOM from 'react-dom';
import EyesOnMe from './EyesOnMe'
import Keypad from './Keypad'


import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);
