import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import Account from "../Components/Account"
import Transactions from "../Components/Transactions"

class Main extends Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

  render() {
    return (
      <div>
        <Container className="_Home" fluid>
            <Row className="justify-content-md-center">
              <Col className="pt-5" sm={10} md={3}>
              <Card>
                <CardHeader>
                  <h3>Welcome to Budget APP</h3>
                </CardHeader>
                <CardBody>
                  Accounts:
                  <Account />
                </CardBody>
                <CardFooter>
                  Total Account: $1000.00
                </CardFooter>
              </Card>
            </Col>
            <Col className="pt-5" sm={10} md={4}>
              <Card>
                <CardHeader>
                  <h3>Recent Transactions</h3>
                </CardHeader>
                <CardBody>
                  <Transactions />
                </CardBody>
              </Card>
            </Col>
            <Col className="pt-5" sm={10} md={3}>
              <Card>
                <CardHeader>
                  <h3>Budget Goals</h3>
                </CardHeader>
                <CardBody>
                  Goals
                </CardBody>
              </Card>
            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
