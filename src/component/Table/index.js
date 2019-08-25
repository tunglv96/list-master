import React, { Component } from "react";
import axios from "axios";
// import "antd/dist/antd.css";
import { Pagination } from "antd";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.getListTable(this.state.pageNumber);
  }

  getListTable(number) {
    axios({
      method: "GET",
      url: `https://ho5gh.sse.codesandbox.io/todos?_limit=10&_page=${number}`,
      data: "null"
    })
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  handlePagination = number => {
    if (number !== this.state.pageNumber) {
      this.getListTable(number);
      this.setState({
        pageNumber: number
      });
      console.log();
    }
  };
  render() {
    return (
      <React.Fragment>
        <div id="table-list" className="table-responsive">
          <div className="card">
            <div className="card-body table-responsive sty-body">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map((product, index) => {
                    return (
                      <tr key={index} className="tr">
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.username}</td>
                        <td>{product.email}</td>
                        <td>{product.website}</td>
                        <td>
                          <span className="fas fa-edit" />
                        </td>
                        <td>
                          <span className="fas fa-trash-alt" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="pagination">
          <div className="row">
            {/* <div className="col-xl-4 col-lg-3">
              <h4 className="pag-left">
                件中31件～60件を表示
              </h4>
            </div> */}
            <div className="col-xl-12 col-lg-12">
              <nav>
                <Pagination
                  onShowSizeChange={this.onShowSizeChange}
                  onChange={this.handlePagination}
                  showTotal={(total, range) => `${total} 件中 ${range[0]} 件～ ${range[1]} 件を表示`}
                  total={150}
                  defaultPageSize={10}
                  className="mt-5"
                />
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
