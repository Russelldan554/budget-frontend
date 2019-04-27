import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, InputGroupText } from "reactstrap";
import * as API from "../API"

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.handleChange;
    this.submitForm = this.submitForm.bind(this);
    this.onRedirectLogin = this.props.onRedirectLogin;
  }

  submitForm(e) {
    e.preventDefault();
    if (e.target.password.value === e.target.confirmPassword.value) {
      let payload = {
        "userName": e.target.userName.value,
        "firstName": e.target.firstName.value,
        "lastName": e.target.lastName.value,
        "email": e.target.email.value,
        "password": e.target.password.value,
        "dateCreated": "2019-04-18"
      }
      API.addUser(payload).then((res)=>{
        this.onRedirectLogin(e);
      });
    } else {
      //handle error message for mismatch password
    }
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
