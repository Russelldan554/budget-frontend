import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import Entry from '../Components/EntryCards/_EntryCard';
import LoginCard from '../Components/EntryCards/_LoginCard';

class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = this.props.auth;
    this.loggedIn = this.props.loggedIn;
    this.state = {
      
    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="pt-4">
          <Col className="pb-4">
            <Entry>
              <LoginCard auth={this.auth} loggedIn={this.loggedIn} />
            </Entry>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
