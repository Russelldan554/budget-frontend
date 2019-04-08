import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Row noGutters>
        <Col xs={12}>
          <div className="jumbotron jumbotron-fluid">
            <Container fluid>
              <Row>
                <Col md={8}>
                  <h1 className="display-4">Welcome to Moolah</h1>
                  <p className="lead">The budgeting app that puts you in charge of your finances.</p>
                </Col>
                <Col md={4}>
                  {/* <SignUpCard /> */}
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
