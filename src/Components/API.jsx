import axios from "axios";
//Comment out whichever one you need for testing
//const URL = 'https://moolah-backend.herokuapp.com/';
const URL = 'http://localhost:8080';
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
  return axios(URL + '/users/' + payload, {
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
  return axios(URL + '/users/' + payload + '/budgets', {
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
  return axios(URL + '/users/' + id + '/budgets', {
    method: 'POST',
    headers: headers,
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const deleteAccount = (userId, id) => {
  return axios(URL + '/users/' + userId + '/accounts/' + id, {
    method: 'DELETE',
    headers: headers,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};


export const deleteBudget = (userId, id) => {
  return axios(URL + '/users/' + userId + '/budgets/' + id, {
    method: 'DELETE',
    headers: headers,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
