// Component Code Goes Here

// keep your state as small as possible
// minimal amount of data in your state
// computer the rest

import React from 'react';

// basically don't do this
class Address extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = { fullAddress: `${props.street}, ${props.city}`}
  // }

  render (){
    return (
      <div>{this.props.street}, {this.props.city}
      </div>
    )
  }
}

export default Address;
