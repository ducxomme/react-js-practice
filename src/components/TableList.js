import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Stripped.css";

class TableList extends Component {
  constructor () {
    super();
    this.userList = [
      {first: 'Mark', last: 'Otto', handle: '@mdo'},
      {first: 'Jacob', last: 'Thornton', handle: '@fat'},
      {first: 'Mark', last: 'Otto', handle: '@mdo'}
    ]
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {this.userList.map((user, index) => {
            if (index % 2 === 0) return <tr className="stripped" key={index}><th scope="row">{index}</th><td>{user.first}</td><td>{user.last}</td><td>{user.handle}</td></tr>
            else return <tr key={index}><th scope="row">{index}</th><td>{user.first}</td><td>{user.last}</td><td>{user.handle}</td></tr>
          })}
        </tbody>
      </table>
    )
  }
}

export default TableList;