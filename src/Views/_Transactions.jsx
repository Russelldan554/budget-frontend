import React, { Component } from 'react';
import {
  Button, Col, Card, CardHeader, Modal, ModalHeader, ModalBody, Row,
} from 'reactstrap';
import TransactionsTable from '../Components/Transactions/TransactionsTable';
import AddTransactionCard from '../Components/Transactions/AddTransactionCard';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modal: false,
    };
  }

  toggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
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
                  <Button
                    className="align-self-center"
                    color="success"
                    onClick={this.toggleModal}
                    outline
                  >
                    <i className="fa fa-edit" aria-hidden="true" />
                  </Button>
                </span>
              </CardHeader>
              <TransactionsTable />
            </Card>
          </Col>
        </Row>


        {modal ? (
          <Modal
            centered
            isOpen={this.state.modal}
            toggle={this.toggleModal}
          >
            <ModalHeader>
              {'Add Transaction'}
            </ModalHeader>
            <ModalBody>
              <AddTransactionCard toggle={this.toggleModal} />
            </ModalBody>
          </Modal>
        ) : (
          null
        )}
      </div>
    );
  }
}

export default Transactions;
