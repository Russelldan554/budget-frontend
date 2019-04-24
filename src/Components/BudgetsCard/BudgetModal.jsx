import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Progress, FormGroup, Label, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class BudgetModal extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
    this.getBudgets = this.props.getBudgets;
  }

  async submitForm(e) {
    e.preventDefault();
    let id = localStorage.getItem("userId");
    let payload = {
      "budgetId": null,
      "category": e.target.category.value,
      "spentAmount": 0,
      "maxAmount": e.target.maxAmount.value
    }
    API.addBudget(id, payload)
    .then(() => {
      this.getBudgets();
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
        <Col xs={12} className="budget">
          <Card>
            <CardHeader>
              <Row>
                <Col className="text-left category">
                <FormGroup>
                  <Label>Category</Label>
                  <Input
                    type="text"
                    name="category"
                    id="newCategory"
                    required
                    onChange={(e) => this.handleChange(e)}
                  />
                </FormGroup>
                </Col>
                <Col className="text-right amounts required" required>
                  <Label>Amount</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" className="account">
                      <div className="pr-1">
                        $0 <span className="of">of</span> $  
                      </div>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      name="maxAmount"
                      id="newMaxAmount"
                      required
                      onChange={(e) => this.handleChange(e)}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Progress multi>
                    <Progress bar color="success" value="210" />
                    <Progress bar color="warning" value="75" />
                    <Progress bar color="danger" value="15" />
                  </Progress>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

BudgetModal.propTypes = {
  spent: PropTypes.string,
  max: PropTypes.string,
  category: PropTypes.string
};

export default BudgetModal;
