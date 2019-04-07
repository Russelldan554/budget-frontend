import React, { Component } from 'react';
import {Container, InputGroup, InputGroupAddon, Card, CardHeader,  Form, FormGroup, Label, Input, Button, InputGroupText} from "reactstrap";
import { Redirect } from 'react-router-dom';

class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      userName: "",
      password: ""
    }
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.auth.authenticate(e.target.userName.value, e.target.password.value);
    this.props.loggedIn(e.target.userName.value);
    this.setState({
      redirectToReferrer: true
    });
  }

  componentDidMount() {
    this.props.hideSidebar();
    if (localStorage.getItem('username'))
      this.setState({redirectToReferrer: true})
  }

  render() {
    const { from } =  { from: { pathname: '/home' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <Container style={{'maxWidth':'550px'}}>
            <Card className="p-3 m-5">
              <CardHeader align="center">
                  <b>Login</b>
              </CardHeader>
              <Form className="" onSubmit={ (e) => this.submitForm(e) } >
                <FormGroup>
                  <Label >User Name</Label>
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  <Input
                    type="text"
                    name="username"
                    id="userName"
                    placeholder="name"
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
                    id="examplePassword"
                    placeholder="password"
                    onChange={ (e) => this.handleChange(e) }
                  />
                  </InputGroup>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Card>
      </Container>
      </div>
    );
  }
}

Login.propTypes = {

};

export default Login;
