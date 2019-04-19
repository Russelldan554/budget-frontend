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
      <div className="p-3 ">
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
              Header: "Account",
              accessor: "account"
            },
            {
              Header: "Date",
              accessor: "date"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight bg-light"
        />
        <br />
      </div>
    );
  }
}

export default Transactions;
