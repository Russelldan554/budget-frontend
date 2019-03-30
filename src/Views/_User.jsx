import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

  render() {
    return (
      <div className="container-fluid">
        <table className="p-5">
          <tr>
            <td>Name</td>
            <td>Dan</td>
          </tr>
          <tr>
            <td>Account ID</td>
            <td>Ad342FG43</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Dan@gmail.com</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default User;
