import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap";
import TransactionsTable from "../Components/TransactionsTable"

class Transactions extends Component{
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  render() {
    return (
      <div className="p-3">
        <Row>
        <Col md={9}>
          <TransactionsTable />
        </Col>
        <Col md={3}>
          <Card>
            <CardHeader>
              Filter Results
            </CardHeader>
            <CardBody>
              Date
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Filter
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Transactions;
