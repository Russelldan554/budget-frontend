import React, { Component } from 'react';
import {
  Button, Card, CardBody, CardHeader, Col, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class Account extends Component {
  async deleteAccount(e) {
    e.preventDefault();

    const {
      getAccounts,
      id,
    } = this.props;

    const userId = localStorage.getItem('userId');
    API.deleteAccount(userId, id)
      .then(() => {
        getAccounts();
      });
  }

  render() {
    const {
      accountName,
      accountType,
      balance,
      bankName,
      deleteButtons,
    } = this.props;

    return (
      <React.Fragment>
        <Col
          className={
            deleteButtons
              ? (
                'account border-fix col-10 col-sm-11'
              )
              : (
                'account col-12'
              )
          }
        >
          <Card>
            <CardHeader className="bg-dark">
              <h6 className="accountName">
                {accountName}
              </h6>
              <div className="bankName">{bankName}</div>
            </CardHeader>
            <CardBody>
              <Row className="info">
                <Col className="text-left accountType">
                  {accountType}
                </Col>
                <Col className="text-right balance">{`$${balance}`}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col
          className={
            deleteButtons
              ? (
                'deleteAccount'
              )
              : (
                'deleteAccount hidden'
              )
            }
          xs={2}
          sm={1}
        >
          <Button
            color="danger"
            className={deleteButtons ? '' : 'hidden'}
            onClick={e => this.deleteAccount(e)}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </Button>
        </Col>
      </React.Fragment>
    );
  }
}

Account.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountType: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  deleteButtons: PropTypes.bool.isRequired,
  getAccounts: PropTypes.func.isRequired,
  id: PropTypes.number,
};

Account.defaultProps = {
  id: null,
};

export default Account;
