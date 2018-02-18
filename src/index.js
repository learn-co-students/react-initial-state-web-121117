import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './components/ToggleButton.js'
import Address from './components/Address.js'
ReactDOM.render(
  <div>
    <ToggleButton />
    <Address
      street = "Carli Caplina"
      city = "Beograd"
    />
  </div>,
  document.getElementById('root')
)
