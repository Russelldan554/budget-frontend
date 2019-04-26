import axios from "axios";
//Comment out whichever one you need for testing
// const URL = 'https://moolah-backend.herokuapp.com/';
const URL = 'http://localhost:8080';
const userID = localStorage.getItem('userId');
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
  return axios(URL + '/users/' + payload + '/accounts', {
    method: 'GET',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getBudgets = payload => {
  return axios(URL + '/users/' + userID + '/budgets', {
    method: 'GET',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    })
}

//This is experimental call for login not implemented on backend yet
export const login = (userName,password) => {
  return axios(URL + '/users/login' , {
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    data: {'username':userName, 'password': password},
  })
    .then(response => response.data)
    .catch(error => {
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
  return axios(URL + '/users/' + id + '/accounts', {
    method: 'POST',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const addBudget = (id, payload) => {
  return axios(URL + '/users/' + userID + '/budgets', {
    method: 'POST',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const updateUser = payload => {
  return axios(URL + '/users/' + userID, {
    method: 'PUT',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
