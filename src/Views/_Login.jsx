import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Entry from '../Components/EntryCards/_EntryCard';
import LoginCard from '../Components/EntryCards/_LoginCard';

class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = this.props.auth;
    this.loggedIn = this.props.loggedIn;
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

Login.propTypes = {
  auth:
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object],
    ).isRequired,
  loggedIn: PropTypes.func.isRequired,
};

export default Login;
