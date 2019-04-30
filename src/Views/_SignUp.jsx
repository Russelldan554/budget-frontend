import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Entry from '../Components/EntryCards/_EntryCard';
import SignUpCard from '../Components/EntryCards/_SignUpCard';

class SignUp extends Component {
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
              <SignUpCard auth={this.auth} loggedIn={this.loggedIn} />
            </Entry>
          </Col>
        </Row>
      </Container>
    );
  }
}

SignUp.propTypes = {
  auth:
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object],
    ).isRequired,
  loggedIn: PropTypes.func.isRequired,
};

export default SignUp;
