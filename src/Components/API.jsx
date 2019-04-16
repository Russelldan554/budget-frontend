import axios from "axios";
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
