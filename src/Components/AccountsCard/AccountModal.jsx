import React, { Component } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Col, 
  FormGroup, 
  Input, 
  InputGroup, 
  InputGroupAddon, 
  Label, 
  Row 
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class AccountModal extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
  }

  async submitForm(e) {
    e.preventDefault();
    let id = localStorage.getItem("userId");
    let payload = {
      "accountId": null,
      "accountName": e.target.accountName.value,
      "accountType": e.target.accountType.value,
      "bankName": e.target.bankName.value,
      "balance": e.target.balance.value
    }
    API.addAccount(id, payload)
    .then(() => {
      this.props.getAccounts();
    })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
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
                  required
                  onChange={(e) => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label className="bankName">Bank Name</Label>
                <Input
                  type="text"
                  name="bankName"
                  id="newBankName"
                  required
                  onChange={(e) => this.handleChange(e)}
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
                  readOnly="true"
                  required
                  onChange={(e) => this.handleChange(e)}
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
                    required
                    onChange={(e) => this.handleChange(e)}
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
  getAccounts: PropTypes.func,
  submitForm: PropTypes.func
};

export default AccountModal;
