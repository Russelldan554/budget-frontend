import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Account extends Component {
    constructor(props) {
      super(props);
      this.accountName = this.props.accountName;
      this.bankName = this.props.bankName;
      this.accountType = this.props.accountType;
      this.balance = this.props.balance;
    }

  render() {
    return (
      <Col xs={12} className="account">
        <Card>
          <CardHeader className="bg-dark">
            <h6 className="accountName">
              {this.accountName}
            </h6>
            <div className="bankName">{this.bankName}</div>
          </CardHeader>
          <CardBody>
            <Row className="info">
              <Col className="text-left accountType">
                {this.accountType}
              </Col>
              <Col className="text-right balance">
                ${this.balance}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

Account.propTypes = {
  accountName: PropTypes.string,
  bankName: PropTypes.string,
  accountType: PropTypes.string,
  balance: PropTypes.number
};

export default Account;
