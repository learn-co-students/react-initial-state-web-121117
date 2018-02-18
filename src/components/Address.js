import React from "react";

class Address extends React.Component {
  render() {
    return (
      <div className="address">
        <h1>
          {this.props.street}, {this.props.city}
        </h1>
      </div>
    );
  }
}

export default Address;
