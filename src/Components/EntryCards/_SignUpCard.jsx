import React, { Component } from 'react';
import {
  Button, Card, CardHeader, CardBody, Form, FormGroup, Input, InputGroup,
  InputGroupAddon, InputGroupText, Label,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as API from '../API';

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.handleChange;
    this.onRedirectLogin = this.props.onRedirectLogin;
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const today = new Date();
    const date = (
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );

    if (e.target.password.value === e.target.confirmPassword.value) {
      const payload = {
        userName: e.target.userName.value,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        dateCreated: date,
      };
      API.addUser(payload)
        .then(() => {
          this.onRedirectLogin(e);
        });
    } else {
      // handle error message for mismatch password
    }
  }

  render() {
    return (
      <Card className="signUpCard">
        <CardHeader align="center">
          <h4 className="cardHeader">Create Account</h4>
        </CardHeader>
        <CardBody>
          <Form onSubmit={e => this.submitForm(e)}>
            <FormGroup>
              <Label className="required">First Name</Label>
              <InputGroup>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label className="required">Last Name</Label>
              <InputGroup>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label className="required">Email</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label className="required">Username</Label>
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
              <Label for="examplePassword" className="required">Password</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  autoComplete="new-password"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label
                className="required"
                for="confirmPassword"
              >
                {'Confirm Password'}
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="new-password"
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
  handleChange: PropTypes.func,
  onRedirectLogin: PropTypes.func,
};

LoginCard.defaultProps = {
  handleChange: () => {},
  onRedirectLogin: () => {},
};

export default LoginCard;
