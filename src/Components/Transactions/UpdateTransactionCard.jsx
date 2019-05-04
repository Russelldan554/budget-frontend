import React, { Component } from 'react';
import {
  Button, Col, Card, Form, FormGroup, Input, InputGroup, Label, Row,
} from 'reactstrap';
import * as API from '../API';

class AddTransactionCard extends Component {
  constructor(props) {
    super(props);
    this.updateTransaction = this.updateTransaction.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  updateTransaction(e) {
    e.preventDefault();
    API.updateTransaction({
      transactionId: this.props.transaction.transactionId,
      name: e.target.name.value,
      date: e.target.date.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      accountID: this.props.transaction.account.accountId,
    }).then(() => {
      window.location.reload();
    });
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
    const {transaction} = this.props;
    return (
      <div className="p-3 ">
        <Card className="p-3">
          <Form onSubmit={e => this.updateTransaction(e)}>
            <FormGroup>
              <Label className="required">Name</Label>
              <InputGroup>
                <Input
                  defaultValue={transaction.name}
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
                  defaultValue={transaction.category}
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
                      defaultValue={transaction.date}
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
                      defaultValue={transaction.amount}
                      type="text"
                      name="amount"
                      id="amount"
                      required
                      onChange={e => this.handleChange(e)}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn-block bg-success">Submit</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default AddTransactionCard;
