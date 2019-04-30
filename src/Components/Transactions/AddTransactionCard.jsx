import React, { Component } from 'react';
import {
  Button, Col, Card, Form, FormGroup, Input, InputGroup, Label, Row,
} from 'reactstrap';
import * as API from '../API';

class AddTransactionCard extends Component {
  constructor(props) {
    super(props);
    this.addTransaction = this.addTransaction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      accountInfo: [],
    };
  }

  componentDidMount() {
    API.getAccounts().then((res) => {
      this.setState({
        accountInfo: res,
      });
    });
  }

  addTransaction(e) {
    e.preventDefault();
    API.addTransaction({
      name: e.target.name.value,
      date: e.target.date.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      accountID: e.target.accountID.value,
    }).then(() => API.getAccounts()
      .then((res) => {
        this.setState({ accountInfo: res });
        window.location.reload();
      }));
    this.props.toggle();
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
    const { accountInfo } = this.state;
    const accounts = accountInfo.map(acc => (
      <option value={acc.accountId}>{acc.accountName}</option>
    ));
    return (
      <div className="p-3 ">
        <Card className="p-3">
          <Form onSubmit={e => this.addTransaction(e)}>
            <FormGroup>
              <Label className="required">Name</Label>
              <InputGroup>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label className="required">Category</Label>
              <InputGroup>
                <Input
                  type="text"
                  name="category"
                  id="category"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <Row>
              <Col sm={7}>
                <FormGroup>
                  <Label className="required">Date</Label>
                  <InputGroup>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      required
                      onChange={e => this.handleChange(e)}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={5}>
                <FormGroup>
                  <Label className="required">Amount</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      name="amount"
                      id="amount"
                      required
                      onChange={e => this.handleChange(e)}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleSelect">Account</Label>
              <Input type="select" name="account" id="accountID">
                {accounts}
              </Input>
            </FormGroup>

            <Button className="btn-block bg-success">Submit</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default AddTransactionCard;
