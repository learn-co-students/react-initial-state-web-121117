// Component Code Goes Here

// a toggle button has an off and an on state
import React from 'react';

class ToggleButton extends React.Component{
  constructor(){
    super();
    this.state = {isEnabled: false}
  } // ends constuctor

  render(){
    return(
      <button>I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}

export default ToggleButton
