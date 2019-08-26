/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elmTaskMenu: false
    }
  }
  toggleMenu =   () => {
    this.props.toggleMenu();
    this.setState({
      elmTaskMenu: !this.state.elmTaskMenu
    });
  }
  render() {
    let {elmTaskMenu} = this.state;
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-1 col-1 bars">
              <span className={elmTaskMenu ? "fas fa-times" : "fas fa-bars"} onClick={this.toggleMenu} />
            </div>
            <div className="col-sm-5 col-5 from">
              <form className="my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <span className="fas fa-search" />
              </form>
            </div>
            <div className="col-sm-6 col-6 header-icon">
              <ul>
                <li className="icon_bell">
                  <span className="far fa-bell" />
                  <div className="bg-red" />
                </li>
                <li className="icon_envelope">
                  <span className="fas fa-envelope-open-text" />
                  <div className="bg-red" />
                </li>
                <li className="li_3">
                  <div className="qqq">
                    <div className="q" />
                    <div className="q1" />
                  </div>
                </li>
                <li className="user_name">
                  <strong>Valerie Luna</strong>
                </li>
                <li className="icon_user">
                  <span className="fas fa-user-circle" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
