import React, { Component } from 'react';
import * as API from '../Components/API';
import {Row, Button, Form, FormGroup, Label, InputGroup, Input, Col, Card, CardHeader, CardBody, Table, Modal, ModalHeader, ModalBody} from 'reactstrap';

class User extends Component {
    constructor(props) {
      super(props);

      this.state = {
        userInfo: {},
        modal: false
      }

      this.toggleModal = this.toggleModal.bind(this);
      this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
      API.getUser().then((res) => {
        this.setState({userInfo: res})
      });
    }

    toggleModal() {
        this.setState({modal: !this.state.modal})
    }

    updateUser(e){
      e.preventDefault()
      let payload = {
        userId: this.state.userInfo.userId,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: this.state.userInfo.password,
        dateCreated: this.state.userInfo.dateCreated,
        userName: this.state.userInfo.userName
      }
      API.updateUser(payload).then((res) => {
        API.getUser().then((res) => {
          this.setState({userInfo: res})
        });
        this.toggleModal();
      });
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
    const { userInfo, modal } = this.state;
    const {firstName, lastName, email} = userInfo
    return (
      <div className="container-fluid">
        <Row>
          <Col sm={10} md={6} className="mx-auto pt-5">
            <Card>
              <CardHeader className="text-center">
                <h5 className="d-inline-block">User Information</h5>
                  <span className="float-right d-inline-block ">
                    <Button outline color="success" className="align-self-center" onClick={this.toggleModal}>
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </Button>
                  </span>
              </CardHeader>
              <CardBody>
                <Table bordered className="p-5 bordered">
                  <tbody>
                    <tr>
                      <td>Account ID</td>
                      <td>{userInfo.userId}</td>
                    </tr>
                    <tr>
                      <td>User Name</td>
                      <td>{userInfo.userName}</td>
                    </tr>
                    <tr>
                      <td>First Name</td>
                      <td>{firstName}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>{lastName}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <td>Date Joined</td>
                      <td>{userInfo.dateCreated}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {modal ?
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} centered={true}>
          <ModalHeader>
            Update User
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => this.updateUser(e)}>
              <FormGroup>
                <Label>First Name</Label>
                <InputGroup>
                  <Input
                    defaultValue={firstName}
                    type="text"
                    name="userInfo.firstName"
                    id="firstName"
                    onChange={(e) => this.handleChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <InputGroup>
                  <Input
                    defaultValue={lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={(e) => this.handleChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <InputGroup>
                  <Input
                    defaultValue={email}
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => this.handleChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <span className="float-right">
                <Button className="m-2" color="success">Submit</Button>
                <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
              </span>
            </Form>
          </ModalBody>
        </Modal> : ""}


      </div>
    );
  }
}

export default User;
