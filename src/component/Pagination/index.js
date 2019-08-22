/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div id="pagination">
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md-4 col-sm-4 col-4">
            <h4 className="pag-left">2,825件中 31件～60件を表示</h4>
          </div>
          <div className="col-xl-8 col-lg-9 col-md-8 col-sm-8 col-8 pagination-content">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"> 
                  <a className="page-link" href="#" aria-label="Previous">
                    <i className="fas fa-arrow-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    9
                  </a>
                </li>
                <li className="page-item">...</li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    10
                  </a>
                </li>
                <li className="page-item">...</li>
                <li className="page-item">
                  <a className="page-link last" href="#">
                    last
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <i className="fas fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
