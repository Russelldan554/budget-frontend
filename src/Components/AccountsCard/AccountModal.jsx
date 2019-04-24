import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AccountModal extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("Create Account");
  }

  render() {
    return (
      <div>
          AccountModal
      </div>
    );
  }
}

// AccountModal.propTypes = {

// };

export default AccountModal;
