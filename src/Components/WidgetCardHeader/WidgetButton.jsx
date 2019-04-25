import React, { Component } from 'react';
import { Button, Tooltip } from 'reactstrap';

class WidgetButton extends Component {
  constructor(props) {
      super(props);
      this.id = this.props.id;
      this.tooltipMessage = this.props.tooltipMessage;
      this.toggleToolTip = this.toggleToolTip.bind(this);
      this.buttonHandler = this.props.buttonHandler;
      this.buttonType = this.props.buttonType;
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
      if (this.buttonType === "add") {
        this.setState ({
          color: "success",
          icon: "fa fa-plus"
        })
      } else if (this.buttonType === "remove") {
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
            onClick={this.buttonHandler}
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
            {this.tooltipMessage}
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default WidgetButton;
