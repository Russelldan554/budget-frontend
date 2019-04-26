import React, { Component } from 'react';
import { Button, Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

class WidgetButton extends Component {
  constructor(props) {
      super(props);
      this.toggleToolTip = this.toggleToolTip.bind(this);
      this.state = {
        tooltipOpen: false,
        color: "",
        icon: ""
    }
  }

  toggleToolTip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  componentDidMount() {
      if (this.props.buttonType === "add") {
        this.setState ({
          color: "success",
          icon: "fa fa-plus"
        })
      } else if (this.props.buttonType === "remove") {
        this.setState ({
            color: "danger",
            icon: "fa fa-minus"
        })
      }
  }

  render() {
    return (
      <div className="createButton d-inline-block">
        <div className="d-flex justify-content-end">
          <Button 
            className="align-self-center" 
            color={this.state.color} 
            id={'tooltip-' + this.props.id} 
            onClick={this.props.buttonHandler}
            outline 
          >
            <i className={this.state.icon} aria-hidden="true"></i>
          </Button>
          <Tooltip 
            placement="top" 
            isOpen={this.state.tooltipOpen} 
            target={'tooltip-' + this.props.id} 
            toggle={this.toggleToolTip} 
            autohide={true} 
            trigger="hover focus"
            delay={{ show: 0, hide: 100 }}
          >
            {this.props.tooltipMessage}
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

export default WidgetButton;
