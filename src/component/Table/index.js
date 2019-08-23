/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentPage: 1,
      todosPerPage: 3
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      data: "null"
    })
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <tr key={index}>
      <td>{todo.id}</td>
      <td>{todo.name}</td>
      <td>{todo.username}</td>
      <td>{todo.email}</td>
      <td>{todo.website}</td>
      <td>
        <span className="fas fa-edit" />
      </td>
      <td>
        <span className="fas fa-trash-alt" />
      </td>
    </tr>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item">
        <a className="page-link" href="#"  key={number} id={number} onClick={this.handleClick}>
          {number}
        </a>
      </li>
      );
    });
    
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
                <tbody className="content">
                  {renderTodos}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="pagination">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-4 col-sm-4 col-4">
              <h4 className="pag-left">2,825件中 31件～60件を表示</h4>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-8 col-sm-8 col-8 pagination-content">
              <nav aria-label="Page navigation example">
                <ul className="pagination" id="page-numbers">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <i className="fas fa-arrow-left" />
                    </a>
                  </li>
                  {renderPageNumbers}
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
      </React.Fragment>
    );
  }
}

export default Table;
