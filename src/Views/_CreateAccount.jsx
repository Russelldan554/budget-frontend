import React, { Component } from 'react';
import {Container, InputGroup, InputGroupAddon, Card, CardHeader,  Form, FormGroup, Label, Input, Button, InputGroupText} from "reactstrap";

class SignUp extends Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

    submitForm(e) {
      e.preventDefault();

    }

    handleChange = async (event) => {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;
      await this.setState({
        [ name ]: value,
      });
    }

  render() {
    return (
      <Container style={{'maxWidth':'550px', 'padding-top':'20px'}}>
          <Card className="p-3">
            <CardHeader align="center">
                <b>Create Account</b>
            </CardHeader>
            <Form className="" onSubmit={ (e) => this.submitForm(e) } >
              <FormGroup>
                <Label >First Name</Label>
                <InputGroup>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={ (e) => this.handleChange(e) }
                />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label >Last Name</Label>
                <InputGroup>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={ (e) => this.handleChange(e) }
                />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label >Email</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your@email.com"
                  onChange={ (e) => this.handleChange(e) }
                />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label >User Name</Label>
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
                  onChange={ (e) => this.handleChange(e) }
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
                  id="Password"
                  placeholder="password"
                  onChange={ (e) => this.handleChange(e) }
                />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
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
                  onChange={ (e) => this.handleChange(e) }
                />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="btn btn-success">Submit</Button>
              </div>
            </Form>
          </Card>
    </Container>
    );
  }
}

export default SignUp;
