import axios from 'axios';
// Comment out whichever one you need for testing
// const URL = 'https://moolah-backend.herokuapp.com/';
const URL = 'http://localhost:8080';
const userID = localStorage.getItem('userId');
const headers = {
  'Content-Type': 'application/json',
};

export const getUsers = (payload => axios(
  `${URL}/users`, {
    method: 'GET',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const getUser = (payload => axios(
  `${URL}/users/${userID}`, {
    method: 'GET',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const getAccounts = (payload => axios(
  `${URL}/users/${userID}/accounts`, {
    method: 'GET',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const getTransactions = (payload => axios(
  `${URL}/users/${userID}/transactions`, {
    method: 'GET',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const getBudgets = (payload => axios(
  `${URL}/users/${userID}/budgets`, {
    method: 'GET',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

// This is experimental call for login not implemented on backend yet
export const login = ((userName, password) => axios(
  `${URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { username: userName, password },
  },
)
  .then(response => (
    { login: true, id: response.data }
  ))
  .catch((error) => {
    if (error.response.data) {
      return { login: false, message: error.response.data.message };
    }
    throw error;
  })
);

export const addUser = (payload => axios(
  `${URL}/users`, {
    method: 'POST',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const addAccount = ((id, payload) => axios(
  `${URL}/users/${userID}/accounts`, {
    method: 'POST',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);


export const addTransaction = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.accountID}/transactions`, {
    method: 'POST',
    headers,
    data: {
      name: payload.name,
      date: payload.date,
      category: payload.category,
      amount: payload.amount,
      userId: userID,
    },
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const addBudget = ((id, payload) => axios(
  `${URL}/users/${userID}/budgets`, {
    method: 'POST',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const updateUser = (payload => axios(
  `${URL}/users/${userID}`, {
    method: 'PUT',
    headers,
    data: payload,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const deleteAccount = ((userId, id) => axios(
  `${URL}/users/${userId}/accounts/${id}`, {
    method: 'DELETE',
    headers,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

export const deleteBudget = ((userId, id) => axios(
  `${URL}/users/${userId}/budgets/${id}`, {
    method: 'DELETE',
    headers,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);
