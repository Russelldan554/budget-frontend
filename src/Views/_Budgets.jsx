import React, { Component } from 'react';
import {} from "reactstrap";
import {Goal} from "../Components/Goal"

class Budgets extends Component{
  render() {
    return (
      <div>
          Budgets

          <Goal spent='20' max='100' category="Shopping" />
          <Goal spent='90' max='100' category="Restaraunt" />
          <Goal spent='150' max='100' category="Groceries" />
          <Goal spent='1400' max='1400' category="Rent" />

        Total: 500
      </div>
    );
  }
}

export default Budgets;
