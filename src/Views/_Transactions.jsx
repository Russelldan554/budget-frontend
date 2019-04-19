import React, { Component } from 'react';
import {} from "reactstrap";
import TransactionsTable from "../Components/TransactionsTable"

class Transactions extends Component{
  render() {
    return (
      <div>
        <TransactionsTable />
      </div>
    );
  }
}

export default Transactions;
