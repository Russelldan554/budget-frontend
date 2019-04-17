import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, InputGroupText } from "reactstrap";

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.handleChange;
    this.submitForm = this.submitForm.bind(this);
    this.onRedirectTrue = this.props.onRedirectTrue;
  }

  submitForm(e) {
    e.preventDefault();
    this.props.auth.authenticate(e.target.userName.value, e.target.password.value);
    this.props.loggedIn(e.target.userName.value);
    this.onRedirectTrue(e);
  }

  render() {
    return (
      <Card className="signUpCard">
        <CardHeader align="center">
          <h4 className="cardHeader">Create Account</h4>
        </CardHeader>
        <CardBody>
          <Form onSubmit={(e) => this.submitForm(e)} >
            <FormGroup>
              <Label className="required">First Name</Label>
              <InputGroup>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  onChange={(e) => this.handleChange(e)}
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
                  placeholder="Last Name"
                  required
                  onChange={(e) => this.handleChange(e)}
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
                  placeholder="Your@email.com"
                  required
                  onChange={(e) => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label className="required">Username</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="username"
                  id="userName"
                  placeholder="Username"
                  required
                  onChange={(e) => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="required">Password</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="password"
                  required
                  onChange={(e) => this.handleChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword" className="required">Confirm Password</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="password"
                  required
                  onChange={(e) => this.handleChange(e)}
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

export default LoginCard;
