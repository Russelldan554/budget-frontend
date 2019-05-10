import React, { Component } from 'react';
import * as API from '../../Components/API';
import {
  BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      data: [
        {'Month' :'Jan', 'Income': 0, 'Spending': 0},
        {'Month' :'Feb', 'Income': 0, 'Spending': 0},
        {'Month' :'Mar', 'Income': 0, 'Spending': 0},
        {'Month' :'Apr', 'Income': 0, 'Spending': 0},
        {'Month' :'May', 'Income': 0, 'Spending': 0},
        {'Month' :'Jun', 'Income': 0, 'Spending': 0},
        {'Month' :'Jul', 'Income': 0, 'Spending': 0},
        {'Month' :'Aug', 'Income': 0, 'Spending': 0},
        {'Month' :'Sep', 'Income': 0, 'Spending': 0},
        {'Month' :'Nov', 'Income': 0, 'Spending': 0},
        {'Month' :'Dec', 'Income': 0, 'Spending': 0},
      ]
    };
    this.calculateSpending = this.calculateSpending.bind(this);
  }

  componentDidMount() {
    API.getTransactions().then((res) => {
      this.setState({
        transactions: res,
      });
    })
    .then(() => this.calculateSpending());

  }

  calculateSpending() {
    const {transactions} = this.state;
    let tempData = this.state.data.slice();
    let currentDate = new Date();
    for (let x in transactions) {
      let date = new Date(transactions[x].date);
      date.setDate(date.getDate() + 1);
      if (date.getYear() === currentDate.getYear()) {
        if (transactions[x].amount < 0) {
          tempData[date.getMonth()].Income -= transactions[x].amount
        } else {
          tempData[date.getMonth()].Spending += transactions[x].amount
        }
      }
    }
    this.setState({
      data: tempData
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className="container-fluid m-0">
                  <span className="text-center"><h5>Spending</h5></span>
        <div style={{'width':'100%','height':'200px'}}>
          <ResponsiveContainer height='100%' width='100%'>
            <BarChart
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Income" fill="#03bc00" />
              <Bar dataKey="Spending" fill="#e23112" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default User;
