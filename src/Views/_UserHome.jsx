import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import Account from "../Components/Account"
import TransactionsTable from "../Components/TransactionsTable"
import {Goal} from "../Components/Goal"

class Main extends Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

    componentDidMount(){
      // this.props.showSidebar();
    }

  render() {
    return (
      <div>
        <Container className="_Home" fluid>
            <Row className="justify-content-md-center">
              <Col className="pt-5" sm={10} md={4} lg={3}>
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
            <Col className="pt-5" sm={10} md={8} lg={5}>
              <Card>
                <CardHeader>
                  <h3>Recent Transactions</h3>
                </CardHeader>
                <CardBody>
                  <TransactionsTable />
                </CardBody>
              </Card>
            </Col>
            <Col className="pt-5" sm={10} md={12} lg={4}>
              <Card>
                <CardHeader>
                  <h3>Budget Goals</h3>
                </CardHeader>
                <CardBody>
                    <Goal spent='20' max='100' category="Shopping" />
                    <Goal spent='90' max='100' category="Restaraunt" />
                    <Goal spent='150' max='100' category="Groceries" />
                    <Goal spent='1400' max='1400' category="Rent" />
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
