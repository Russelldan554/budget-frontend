import React, { Component } from 'react';
import { CardHeader, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import CreateButton from './CreateButton'
import NewEntityModal from './NewEntityModal';

class WidgetCardHeader extends Component {
  constructor(props) {
    super(props);
    // Use states if netWorth will be calculated on the frontend?
    this.cardHeader = this.props.cardHeader;
    this.buttonID = this.props.buttonID;
    this.actionTitle = this.props.actionTitle;
    this.actionConfirm = this.props.actionConfirm;
    this.modal = React.createRef();
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.modal.current.toggle();
  }

  render() {
    return (
      <CardHeader>
        <Row className="info" noGutters>
          <Col xs={10}>
            <h3 className="cardHeader">{this.cardHeader}</h3>
          </Col>
          <Col xs={2}>
            <CreateButton id={this.buttonID} tooltipMessage={this.actionTitle} toggleModal={this.toggleModal} />
            <NewEntityModal modalTitle={this.actionTitle} actionConfirm={this.actionConfirm} ref={this.modal} modalBody={this.cardHeader} />
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
