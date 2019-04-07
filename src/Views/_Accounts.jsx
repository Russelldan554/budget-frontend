import React, { Component } from 'react';
import { Col } from 'reactstrap';

import AccountsCard from '../Components/AccountsCard/_AccountsCard'

class Accounts extends Component{

  render() {
    return (
      <React.Fragment>
        <Col lg={12}>
          <AccountsCard />
        </Col>
      </ React.Fragment>
    );
  }
}

export default Accounts;
