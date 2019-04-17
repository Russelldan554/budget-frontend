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
      <Card className="loginCard">
        <CardHeader align="center">
          <h4 className="cardHeader">Login to Moolah</h4>
        </CardHeader>
        <CardBody>
          <Form onSubmit={(e) => this.submitForm(e)} >
            <FormGroup>
              <Label>Username</Label>
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
              <Label for="examplePassword">Password</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
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
