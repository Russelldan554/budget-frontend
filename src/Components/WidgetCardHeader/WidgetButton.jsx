import React, { Component } from 'react';
import { Button, Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

class WidgetButton extends Component {
  constructor(props) {
    super(props);
    this.toggleToolTip = this.toggleToolTip.bind(this);
    this.state = {
      tooltipOpen: false,
      color: '',
      icon: '',
    };
  }

  componentDidMount() {
    if (this.props.buttonType === 'add') {
      this.setState({
        color: 'success',
        icon: 'fa fa-plus',
      });
    } else if (this.props.buttonType === 'remove') {
      this.setState({
        color: 'danger',
        icon: 'fa fa-minus',
      });
    }
  }

  toggleToolTip() {
    const {
      tooltipOpen,
    } = this.state;

    this.setState({
      tooltipOpen: !tooltipOpen,
    });
  }

  render() {
    const {
      buttonHandler,
      id,
      tooltipMessage,
    } = this.props;

    const {
      color,
      icon,
      tooltipOpen,
    } = this.state;


    return (
      <div className="createButton d-inline-block">
        <div className="d-flex justify-content-end">
          <Button
            className="align-self-center"
            color={color}
            id={`tooltip-${id}`}
            onClick={buttonHandler}
            outline
          >
            <i className={icon} aria-hidden="true" />
          </Button>
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            target={`tooltip-${id}`}
            toggle={this.toggleToolTip}
            autohide
            trigger="hover focus"
            delay={{ show: 0, hide: 100 }}
          >
            {tooltipMessage}
          </Tooltip>
        </div>
      </div>
    );
  }
}

WidgetButton.propTypes = {
  buttonHandler: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tooltipMessage: PropTypes.string.isRequired,
};

WidgetButton.defaultProps = {
  buttonHandler: () => {},
};

export default WidgetButton;
