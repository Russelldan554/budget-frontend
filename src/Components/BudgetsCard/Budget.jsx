import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Progress } from 'reactstrap';
import PropTypes from 'prop-types';

class Budget extends Component {
  constructor(props) {
    super(props);
    this.spent = this.props.spent;
    this.max = this.props.max;
    this.category = this.props.category;
  }

  determineColor(){
    var color = "success";
    var percentSpent = (this.props.spent/this.props.max);

    if (percentSpent > 0.99) {
      color = "danger";
    } else if (percentSpent > 0.80) {
      color = "warning";
    }

    return color;
  } 

  render() {
    return (
      <Col xs={12} className="budget">
        <Card>
          <CardHeader>
            <Row>
              <Col className="text-left category">
                {this.props.category}
              </Col>
              <Col className="text-right amounts">
                ${this.props.spent} <span className="of">of</span> ${this.props.max}
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <Progress color={this.determineColor()} value={this.props.spent} max={this.props.max} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

Budget.propTypes = {
  spent: PropTypes.string,
  max: PropTypes.string,
  category: PropTypes.string
};

export default Budget;
