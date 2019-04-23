import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BudgetModal extends Component {
  render() {
    return (
      <div>
          BudgetModal
      </div>
    );
  }
}

BudgetModal.propTypes = {
  spent: PropTypes.string,
  max: PropTypes.string,
  category: PropTypes.string
};

export default BudgetModal;
