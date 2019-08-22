import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      data: "null"
    })
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
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
              <tbody className="content">
              {this.state.products.map((product, index) => {
              return (
                <tr key={index}>
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
    );
  }
}

export default Table;
