import React, { Component } from 'react';
import {
  Card, CardHeader, CardBody, Col, FormGroup, Input, InputGroup,
  InputGroupAddon, Label, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class AccountModal extends Component {
  async submitForm(e) {
    e.preventDefault();

    const {
      getAccounts,
    } = this.props;

    const id = localStorage.getItem('userId');
    const payload = {
      accountId: null,
      accountName: e.target.accountName.value,
      accountType: e.target.accountType.value,
      bankName: e.target.bankName.value,
      balance: e.target.balance.value,
    };

    API.addAccount(id, payload)
      .then(() => {
        getAccounts();
      });
  }

  async handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Row noGutters>
        <Col xs={12} className="account">
          <Card>
            <CardHeader className="bg-dark">
              <FormGroup>
                <Label className="text-white">Account Name</Label>
                <Input
                  type="text"
                  name="accountName"
                  id="newAccountName"
                  maxLength={30}
                  required
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label className="bankName">Bank Name</Label>
                <Input
                  type="text"
                  name="bankName"
                  id="newBankName"
                  maxLength={30}
                  required
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label className="accountType">Account Type</Label>
                <Input
                  type="select"
                  name="accountType"
                  id="newAccountType"
                  maxLength={30}
                  readOnly
                  required
                  onChange={e => this.handleChange(e)}
                >
                  <option>Checking</option>
                  <option>Savings</option>
                  <option>Credit</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label className="balance">Balance</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input
                    type=""
                    name="balance"
                    id="newBalance"
                    maxLength={10}
                    required
                    onChange={e => this.handleChange(e)}
                  />
                </InputGroup>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

AccountModal.propTypes = {
  getAccounts: PropTypes.func.isRequired,
};

export default AccountModal;
