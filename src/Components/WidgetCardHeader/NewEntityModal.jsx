import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Utils from '../Utils';

import BudgetModal from '../BudgetsCard/BudgetModal';
import AccountModal from '../AccountsCard/AccountModal';

class NewEntityModal extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.modalTitle = this.props.modalTitle;
      this.actionConfirm = this.props.actionConfirm;
      this.modalBody = this.props.modalBody;
      this.state = {
        modal: false
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let content;

    if (this.modalBody === Utils.cardHeaders[0]) {
      content = <AccountModal />;
    } else if (this.modalBody === Utils.cardHeaders[1]) {
      content = <BudgetModal />;
    }

    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} centered={true}>
        <ModalHeader toggle={this.toggle}>
          {this.modalTitle}
        </ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.toggle}>{this.actionConfirm}</Button>
          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NewEntityModal;
