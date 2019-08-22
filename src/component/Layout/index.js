import React, { Component } from "react";
import Header from "../Header";
import Nav from "../Nav";
import Banner from "../Banner";
import Filter from "../Filter";
import Table from "../Table";
import Pagination from "../Pagination";
import Footer from "../Footer";

class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-1" id="nav">
            <Nav />
          </div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-11" id="content">
            <Header />
            <article>
              <div className="conatiner-content">
                <Banner />
                <Filter />
                <Table />
                <Pagination />
              </div>
            </article>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
