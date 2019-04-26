import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row,  } from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class Account extends Component {
  async deleteAccount(e) {
    e.preventDefault();
    let userId = localStorage.getItem("userId");
    API.deleteAccount(userId, this.props.id)
    .then(() => {
      this.props.getAccounts();
    })
  }

  render() {
    return (
      <React.Fragment>
        <Col 
          className={
            this.props.deleteButtons ? 
              "account border-fix col-10 col-sm-11" 
            : 
              "account col-12"
          }
        >
          <Card>
            <CardHeader className="bg-dark">
              <h6 className="accountName">
                {this.props.accountName}
              </h6>
              <div className="bankName">{this.props.bankName}</div>
            </CardHeader>
            <CardBody>
              <Row className="info">
                <Col className="text-left accountType">
                  {this.props.accountType}
                </Col>
                <Col className="text-right balance">
                  ${this.props.balance}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col 
          className={
            this.props.deleteButtons ? 
              "deleteAccount" 
            : 
              "deleteAccount hidden"
            } 
          xs={2} 
          sm={1}
        >
          <Button 
            color="danger" 
            className={this.props.deleteButtons ? "" : "hidden"}
            onClick={(e) => this.deleteAccount(e)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
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
  id: PropTypes.number
};

export default Account;
