import React, { Component } from 'react';
import ReactTable from 'react-table';
import * as API from '../API';
import 'react-table/react-table.css';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    API.getTransactions().then((res) => {
      this.setState({
        transactions: res,
      });
    }).catch((error) => {
      this.setState({
      });
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
              accessor: 'name',
              Header: 'Name',
            },
            {
              accessor: 'category',
              Header: 'Category',
            },
            {
              accessor: 'amount',
              Header: 'Amount',
            },
            {
              accessor: 'account.accountName',
              Header: 'Account',

            },
            {
              accessor: 'date',
              Header: 'Date',
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
