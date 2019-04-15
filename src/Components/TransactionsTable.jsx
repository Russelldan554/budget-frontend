import React, { Component } from 'react';
import ReactTable from "react-table";
import { makeData } from "./Utils.js";

import "react-table/react-table.css";

class Transactions extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: makeData()
      }
    }


  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Category",
              accessor: "category"
            },
            {
              Header: "Amount",
              accessor: "amount"
            },
            {
              Header: "Date",
              accessor:"date"
            },
            {
              Header: "Account",
              accessor: "account"
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Transactions;
