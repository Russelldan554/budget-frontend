import axios from "axios";

const URL = 'http://localhost:8080';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    name: "SafeWay",
    category: "shopping",
    amount: Math.floor(Math.random() * 30),
  };
};

export function makeData(len = 55) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export function addUsers(un,em,pa,fn,ln,dc) {
  const userName = un;
  const email = em;
  const password = pa;
  const firstName= fn;
  const lastName = ln;
  const dateCreated = dc;
  try {
  axios.post(URL + '/users', {
      userName, email, password, firstName, lastName, dateCreated
    });
  } catch (e) {
    console.log("error");
  }
}

export function addAccount(an, bal, id) {
  const accountName = an;
  const balance = bal;
  try {
  axios.post(URL + '/users/' + id + '/accounts', {
    accountName, balance
  });
  } catch (e) {
  console.log("error" + e);
  }
}

export default {
  makeData,
  addUsers,
  addAccount
}
