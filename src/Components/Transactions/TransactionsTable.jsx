import React, { Component } from 'react';
import ReactTable from "react-table";
import * as API from "../../Components/API";
import "react-table/react-table.css";

class Transactions extends Component {
    constructor(props) {
      super(props);

      this.state = {
        transactions: []
      }
    }

  componentDidMount() {
    API.getTransactions().then((res)=>{
      console.log(res);
      this.setState({transactions: res});
    }).catch((error) => {
    });
  }

  render() {
    const { transactions } = this.state;
    return (
      <div className="p-3 ">
        <ReactTable
          data={transactions}
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
              accessor: "account.accountName"
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
