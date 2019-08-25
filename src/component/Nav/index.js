/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className=" navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fab fa-microsoft" />
                  <p>Dashboard</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-heart" />
                  <p>Blue Print</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-cog" />
                  <p>Property</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-crown" />
                  <p>Master</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-book-open" />
                  <p>Tenants</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-globe" />
                  <p>Sites</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-check" />
                  <p>Parts</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-book-open" />
                  <p>Catalog</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="fas fa-user" />
                  <p>User</p>
                  <span className="fas fa-angle-right icon-next" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
