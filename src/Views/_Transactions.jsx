import React, { Component } from 'react';
import {Row, Button, Col, Card, CardHeader, Modal, ModalHeader, ModalBody} from "reactstrap";
import TransactionsTable from "../Components/Transactions/TransactionsTable"
import AddTransactionCard from "../Components/Transactions/AddTransactionCard"

class Transactions extends Component{
  constructor(props) {
  super(props);

  this.state = {
    modal: false
  }

  this.toggleModal = this.toggleModal.bind(this);
}

  toggleModal() {
      this.setState({modal: !this.state.modal})
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <Row>
          <Col sm={10} className="p-5 mx-auto">
          <Card>
            <CardHeader className="text-center">
              <h4 className="d-inline-block">Transactions</h4>
              <span className="float-right d-inline-block ">
                <Button outline color="success" className="align-self-center" onClick={this.toggleModal}>
                <i className="fa fa-edit" aria-hidden="true"></i>
                </Button>
              </span>
            </CardHeader>
          <TransactionsTable />
          </Card>
          </Col>
        </Row>


        {modal ?
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} centered={true}>
          <ModalHeader>
            Add Transaction
          </ModalHeader>
          <ModalBody>
            <AddTransactionCard toggle={this.toggleModal} />
          </ModalBody>
        </Modal> : ""}
      </div>
    );
  }
}

export default Transactions;
