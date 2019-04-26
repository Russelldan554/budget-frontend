import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader 
} from 'reactstrap';
import PropTypes from 'prop-types';
import Utils from '../Utils';

import BudgetModal from '../BudgetsCard/BudgetModal';
import AccountModal from '../AccountsCard/AccountModal';

class NewEntityModal extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.contentRef = React.createRef();
  }

  submitForm(e) {
    this.contentRef.current.submitForm(e);
  }

  render() {
    let content;

    if (this.props.modalBody === Utils.cardHeaders[0]) {
      content = 
        <AccountModal 
          getAccounts={this.props.getAccounts} 
          ref={this.contentRef} 
          toggleModal={this.props.buttonHandler} 
        />
    } else if (this.props.modalBody === Utils.cardHeaders[1]) {
      content = 
        <BudgetModal 
          getBudgets={this.props.getBudgets} 
          ref={this.contentRef} 
          toggleModal={this.props.buttonHandler} 
        />
    }

    return (
      <Modal 
        isOpen={this.props.buttonState} 
        toggle={this.props.buttonHandler} 
        centered={true}
      >
        <Form onSubmit={(e) => this.submitForm(e)}>
          <ModalHeader>
            Add a{this.props.modalTitle}
          </ModalHeader>
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            <Button color="success">
              {this.props.actionConfirm}
            </Button>
            <Button 
              color="danger" 
              onClick={this.props.buttonHandler}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

NewEntityModal.propTypes = {
  actionConfirm: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  buttonState: PropTypes.bool.isRequired,
  getBudgets: PropTypes.func,
  modalBody: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired
};

export default NewEntityModal;
