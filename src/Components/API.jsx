import axios from "axios";
//Comment out whichever one you need for testing
// const URL = 'https://moolah-backend.herokuapp.com/';
const URL = 'http://localhost:8080';
var userID = localStorage.getItem('userId');
const headers = {
  'Content-Type': 'application/json'
}


export const getUsers = payload => {
  return axios(URL + '/users', {
    method: 'GET',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getUser = payload => {
  return axios(URL + '/users/' + userID, {
    method: 'GET',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getAccounts = payload => {
  return axios(URL + '/users/' + userID + '/accounts', {
    method: 'GET',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getTransactions = payload => {
  return axios(URL + '/users/' + userID + '/transactions', {
    method: 'GET',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

//This is experimental call for login not implemented on backend yet
export const login = (userName,password) => {
  return axios(URL + '/users/login' , {
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    data: {'username':userName, 'password': password},
  })
    .then(response => {
      return {login: true, id: response.data}
    })
    .catch(error => {
      if (error.response.data)
        return {login: false, message: error.response.data.message}
      throw error;
    });
};

export const addUser = payload => {
  return axios(URL + '/users', {
    method: 'POST',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const addAccount = (id, payload) => {
  return axios(URL + '/users/' + userID + '/accounts', {
    method: 'POST',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const addTransaction = ( payload) => {
  return axios(URL + '/users/' + userID + '/accounts/' + payload.accountID + '/transactions', {
    method: 'POST',
    headers: headers,
    data: {
      name: payload.name,
      date: payload.date,
      category: payload.category,
      amount: payload.amount,
      userId: userID
    },
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
