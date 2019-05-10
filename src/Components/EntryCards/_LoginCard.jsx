import React, { Component } from 'react';
import {
  Button, Card, CardHeader, CardBody, Form, FormGroup, Input, InputGroup,
  InputGroupAddon, InputGroupText, Label,
} from 'reactstrap';
import PropTypes from 'prop-types';

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.handleChange;
    this.onRedirectTrue = this.props.onRedirectTrue;
    this.submitForm = this.submitForm.bind(this);
  }

  async submitForm(e) {
    e.preventDefault();

    const {
      auth,
      loggedIn,
    } = this.props;

    const userName = e.target.userName.value;
    await auth.authenticate(e.target.userName.value, e.target.password.value)
      .then((res) => {
        if (res) {
          loggedIn(userName);
          this.onRedirectTrue(e);
        } else {
          alert('Login Failed');
        }
      });
  }

  render() {
    return (
      <Card className="loginCard">
        <CardHeader align="center">
          <h4 className="cardHeader">Login to Moolah</h4>
        </CardHeader>
        <CardBody>
          <Form onSubmit={e => this.submitForm(e)}>
            <FormGroup>
              <Label>Username</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="username"
                  id="userName"
                  autoComplete="username"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  autoComplete="current-password"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <Button className="btn-block bg-success">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

LoginCard.propTypes = {
  auth:
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.object],
    ).isRequired,
  handleChange: PropTypes.func,
  loggedIn: PropTypes.func.isRequired,
  onRedirectTrue: PropTypes.func,
};

LoginCard.defaultProps = {
  handleChange: () => {},
  onRedirectTrue: () => {},
};

export default LoginCard;
