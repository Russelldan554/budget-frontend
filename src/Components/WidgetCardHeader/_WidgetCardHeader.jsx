import React, { Component } from 'react';
import { CardHeader, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import WidgetButton from './WidgetButton'
import NewEntityModal from './NewEntityModal';

class WidgetCardHeader extends Component {
  constructor(props) {
    super(props);
    // Use states if netWorth will be calculated on the frontend?
    this.cardHeader = this.props.cardHeader;
    this.buttonID = this.props.buttonID;
    this.actionTitle = this.props.actionTitle;
    this.actionConfirm = this.props.actionConfirm;
    this.getBudgets = this.props.getBudgets;
    this.modal = React.createRef();
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.buttonType = ["remove", "add"]
  }

  toggleCreateModal = () => {
    this.modal.current.toggle();
  }

  toggleDelete = () => { // Placeholder
    console.log("DELETE")
  }

  render() {
    return (
      <CardHeader>
        <Row className="info" noGutters>
          <Col xs={8}>
            <h3 className="cardHeader">{this.cardHeader}</h3>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <WidgetButton id={this.buttonType[0] + this.buttonID} tooltipMessage={"Remove a" + this.actionTitle} buttonHandler={this.toggleDelete} buttonType={this.buttonType[0]} />
            <WidgetButton id={this.buttonType[1] + this.buttonID} tooltipMessage={"Add a" + this.actionTitle} buttonHandler={this.toggleCreateModal} buttonType={this.buttonType[1]} />
            <NewEntityModal modalTitle={this.actionTitle} actionConfirm={this.actionConfirm} ref={this.modal} modalBody={this.cardHeader} getBudgets={this.getBudgets} />
          </Col>
        </Row>
      </CardHeader>
    );
  }
}


WidgetCardHeader.propTypes = {
  cardHeader: PropTypes.string.isRequired,
  buttonID: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
  actionConfirm: PropTypes.string.isRequired,
};

export default WidgetCardHeader;
