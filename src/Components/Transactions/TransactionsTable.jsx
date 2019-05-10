import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';
import 'react-table/react-table.css';

class TransactionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
    this.update = this.update.bind(this);
    this.updateTransaction = this.updateTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  componentDidMount() {
    API.getTransactions().then((res) => {
      this.setState({
        transactions: res,
      });
    }).catch(() => {
    });
  }

  update() {
    API.getTransactions().then((res) => {
      this.setState({
        transactions: res,
      });
      this.props.update();
    });
  }

  updateTransaction(transactionId) {
    const { transactions } = this.state;
    const tran = transactions.find(x => x.transactionId === transactionId);
    this.props.updateTransaction(tran);
  }

  deleteTransaction(transactionId) {
    const { transactions } = this.state;
    const payload = transactions.find(x => x.transactionId === transactionId);
    API.deleteTransaction(payload)
      .then(() => {
        API.getTransactions().then((res) => {
          if (res) {
            this.setState({
              transactions: res,
            });
          } else {
            this.setState({
              transactions: {},
            });
          }
        }).catch(() => {
          window.location.reload();
        });
      });
  }

  render() {
    const { transactions } = this.state;
    const { refresh } = this.props;
    if (refresh) {
      this.update();
    }
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
              Header: 'Options',
              Cell: data => (
                <div className="text-center">
                  <Button
                    onClick={
                      () => this.updateTransaction(data.original.transactionId)
                    }
                    color="success"
                    size="sm"
                  >
                    <i className="fa fa-edit" />
                  </Button>
                    &nbsp;
                  <Button
                    onClick={
                      () => this.deleteTransaction(data.original.transactionId)
                    }
                    color="danger"
                    size="sm"
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </div>
              ),
            },
          ]}
          defaultPageSize={10}
          defaultSorted={[{
            id: 'date',
            desc: 'true',
          }]}
          className="-highlight bg-light"
        />
        <br />
      </div>
    );
  }
}

TransactionsTable.propTypes = {
  refresh: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired,
};

export default TransactionsTable;
