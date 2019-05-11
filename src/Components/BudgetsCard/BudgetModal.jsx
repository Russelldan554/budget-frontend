import React, { Component } from 'react';
import {
  Card, CardHeader, CardBody, Col, FormGroup, Input, InputGroup,
  InputGroupAddon, Label, Progress, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class BudgetModal extends Component {
  async submitForm(e) {
    e.preventDefault();

    const {
      getBudgets,
    } = this.props;

    const id = localStorage.getItem('userId');
    const payload = {
      budgetId: null,
      category: e.target.category.value,
      spentAmount: 0,
      maxAmount: e.target.maxAmount.value,
    };

    API.addBudget(id, payload)
      .then(() => {
        getBudgets();
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
                      maxLength={40}
                      required
                      onChange={e => this.handleChange(e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="text-left amounts required" required>
                  <Label>Amount</Label>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend" className="account">
                        {'$'}
                      </InputGroupAddon>
                      <Input
                        type="number"
                        name="maxAmount"
                        placeholder="0"
                        id="newMaxAmount"
                        step="1"
                        maxLength={10}
                        required
                        onChange={e => this.handleChange(e)}
                      />
                      <InputGroupAddon addonType="append" className="account">
                        {'.00'}
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
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
  getBudgets: PropTypes.func.isRequired,
};

export default BudgetModal;
