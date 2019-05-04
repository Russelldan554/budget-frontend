import React, { Component } from 'react';
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
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
    const {
      buttonHandler,
      getAccounts,
      getBudgets,
      modalTitle,
    } = this.props;

    let content = null;

    if (this.props.modalBody === Utils.cardHeaders[0]) {
      content = (
        <AccountModal
          getAccounts={getAccounts}
          ref={this.contentRef}
          toggleModal={buttonHandler}
        />
      );
    } else if (this.props.modalBody === Utils.cardHeaders[1]) {
      content = (
        <BudgetModal
          getBudgets={getBudgets}
          ref={this.contentRef}
          toggleModal={buttonHandler}
        />
      );
    }

    return (
      <Modal
        isOpen={this.props.buttonState}
        toggle={this.props.buttonHandler}
        centered
      >
        <Form onSubmit={e => this.submitForm(e)}>
          <ModalHeader>
            {`Add a${modalTitle}`}
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
              {'Cancel'}
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
  getAccounts: PropTypes.func,
  getBudgets: PropTypes.func,
  modalBody: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

NewEntityModal.defaultProps = {
  getAccounts: () => {},
  getBudgets: () => {},
};

export default NewEntityModal;
