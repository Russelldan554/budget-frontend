import React, { Component } from 'react';
import { CardHeader, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import WidgetButton from './WidgetButton'
import NewEntityModal from './NewEntityModal';

class WidgetCardHeader extends Component {
  constructor(props) {
    super(props);
    this.buttonType = ["remove", "add"]
    this.toggleCreateModal = this.toggleCreateModal.bind(this);

    this.state = {
      createModal: false
    }
  }

  toggleCreateModal() {
    this.setState ({
      createModal: !this.state.createModal
    })
  }

  render() {
    return (
      <CardHeader>
        <Row className="info" noGutters>
          <Col xs={8}>
            <h3 className="cardHeader">{this.props.cardHeader}</h3>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <WidgetButton 
              id={this.buttonType[0] + this.props.buttonID} 
              tooltipMessage={"Remove a" + this.props.actionTitle} 
              buttonHandler={this.props.toggleDeleteButtons} 
              buttonType={this.buttonType[0]} 
            />
            <WidgetButton 
              id={this.buttonType[1] + this.props.buttonID} 
              tooltipMessage={"Add a" + this.props.actionTitle} 
              buttonHandler={this.toggleCreateModal} 
              buttonType={this.buttonType[1]} 
            />
            <NewEntityModal 
              modalTitle={this.props.actionTitle} 
              actionConfirm={this.props.actionConfirm} 
              modalBody={this.props.cardHeader} 
              getAccounts={this.props.getAccounts}
              getBudgets={this.props.getBudgets} 
              buttonHandler={this.toggleCreateModal} 
              buttonState={this.state.createModal} />
          </Col>
        </Row>
      </CardHeader>
    );
  }
}

WidgetCardHeader.propTypes = {
  actionConfirm: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
  buttonID: PropTypes.string.isRequired,
  cardHeader: PropTypes.string.isRequired,
  getAccounts: PropTypes.func,
  getBudgets: PropTypes.func,
  toggleDeleteButtons: PropTypes.func
};

export default WidgetCardHeader;
