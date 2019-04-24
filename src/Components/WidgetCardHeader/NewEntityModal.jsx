import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form } from 'reactstrap';
import Utils from '../Utils';

import BudgetModal from '../BudgetsCard/BudgetModal';
import AccountModal from '../AccountsCard/AccountModal';

class NewEntityModal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.modalTitle = this.props.modalTitle;
    this.actionConfirm = this.props.actionConfirm;
    this.modalBody = this.props.modalBody;
    this.contentRef = React.createRef();
    this.handleChange = this.props.handleChange;
    this.getBudgets = this.props.getBudgets;
    this.state = {
      modal: false
    }
  }

  submitForm(e) {
    this.contentRef.current.submitForm(e);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let content;

    if (this.modalBody === Utils.cardHeaders[0]) {
      content = <AccountModal ref={this.contentRef} />
    } else if (this.modalBody === Utils.cardHeaders[1]) {
      content = <BudgetModal ref={this.contentRef} getBudgets={this.getBudgets} />
    }

    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} centered={true}>
        <Form onSubmit={(e) => this.submitForm(e)}>
          <ModalHeader toggle={this.toggle}>
            {this.modalTitle}
          </ModalHeader>
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            <Button color="success">{this.actionConfirm}</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

export default NewEntityModal;
