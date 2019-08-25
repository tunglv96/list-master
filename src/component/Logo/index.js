import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="logo">
          <div className="bg-blue">
            <div className="bg-white">
              <img src="./images/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Logo;
