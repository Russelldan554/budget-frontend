import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class Accounts extends Component{
  render() {
    return (
      <div>
          <Row>
            <Col>
              <Card xs={11}>
                <CardHeader>
                  Accounts
                </CardHeader>
                <CardBody>
                  <Row>
                    {/*we will change this to a for loop for how ever many accounts are available */}
                    <Col sm={4} align="center">
                      <Card>
                        Account One <br />
                        Bank Name
                        <hr />
                        Type: Checking <br />
                        Total: $5000.00
                      </Card>
                    </Col>
                    <Col sm={4} align="center">
                      <Card>
                        Account Two <br />
                        Bank Name
                        <hr />
                        Type: Savings <br />
                      Total: $10000.00
                      </Card>
                    </Col>
                    <Col sm={4} align="center">
                      <Card>
                        Account Three <br />
                        Bank Name
                        <hr />
                        Type: Credit <br />
                      Total: $250.00
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  Total: $14750.00
                </CardFooter>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Accounts;
