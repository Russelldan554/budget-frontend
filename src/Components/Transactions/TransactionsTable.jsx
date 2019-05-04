import React, { Component } from 'react';
import ReactTable from 'react-table';
import {Button} from 'reactstrap';
import * as API from '../API';
import 'react-table/react-table.css';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };

    this.updateTransaction = this.updateTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
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

  updateTransaction(transactionId) {
    let tran = this.state.transactions.find(x => x.transactionId===transactionId)
    this.props.updateTransaction(tran);
  }

  deleteTransaction(transactionId) {
    let payload = this.state.transactions.find(x => x.transactionId===transactionId)
    API.deleteTransaction(payload)
      .then(() => {
        window.location.reload();
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
            {
              Header:'Options',
              Cell: (data) => (<div className="text-center">
                <Button
                  onClick={() => this.updateTransaction(data.original.transactionId)}
                  color={"success"}
                  size="sm">
                    <i className="fa fa-edit" />
                </Button>&nbsp;
                <Button
                  onClick={() => this.deleteTransaction(data.original.transactionId)}
                  color={"danger"}
                  size="sm">
                    <i className="fa fa-trash" />
                </Button>
              </div>
              ),
            }
          ]}
          defaultPageSize={10}
          defaultSorted={[{
                    id: 'date',
                    desc: 'true'
                }]}
          className="-highlight bg-light"
        />
        <br />
      </div>
    );
  }
}

export default Transactions;
