import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

class Footer extends Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

  render() {
    return (
      <div className="_Footer">
        <Row className="justify-content-md-center">
          <Col className="p-2" sm={6} md={4}>
              
          </Col>
          <Col sm={6} md={5}>
              Contact: some@somewhere.com <br />
            Github <a href="www.github.com">link</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
