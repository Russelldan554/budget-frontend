import React, { Component } from 'react';
import {} from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "./Utils.js";

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

          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Transactions;
