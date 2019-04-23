import React, { Component } from 'react';
import { Button, Tooltip } from 'reactstrap';

class CreateButton extends Component {
  constructor(props) {
      super(props);
      this.id = this.props.id;
      this.tooltipMessage = this.props.tooltipMessage;
      this.toggleToolTip = this.toggleToolTip.bind(this);
      this.toggleModal = this.props.toggleModal;
      this.state = {
        tooltipOpen: false,
    }
  }

  toggleToolTip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggleModal() {
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="createButton d-flex justify-content-end">
        <Button outline color="success" className="align-self-center" id={'tooltip-' + this.props.id} onClick={this.toggleModal}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Button>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={'tooltip-' + this.props.id} toggle={this.toggleToolTip} autohide={true} trigger="hover focus">
          {this.tooltipMessage}
        </Tooltip>
      </div>
    );
  }
}

export default CreateButton;
