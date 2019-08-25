import React, { Component } from "react";
import Header from "./component/Header";
import Logo from "./component/Logo";
import Nav from "./component/Nav";
import Banner from "./component/Banner";
import Filter from "./component/Filter";
import Table from "./component/Table";
import Footer from "./component/Footer";
import "./App.scss";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elmTaskMenu: false
    }
  }

  toggleMenu = () => {
    this.setState({
      elmTaskMenu: !this.state.elmTaskMenu
    });
  }

  render() {
    let {elmTaskMenu} = this.state;
    let elmNav = elmTaskMenu ? <Nav /> : '';
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-1" id="nav">
              <Logo />
              {elmNav}
            </div>
            <div
              className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-11"
              id="content"
            >
              <Header toggleMenu={this.toggleMenu} />
              <article>
                <div className="conatiner-content">
                  <Banner />
                  <Filter />
                  <Table />
                </div>
              </article>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
