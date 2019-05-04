import axios from 'axios';
// Comment out whichever one you need for testing
// const URL = 'https://moolah-backend.herokuapp.com/';
const URL = 'http://localhost:8080';
const userID = localStorage.getItem('userId');
const headers = {
  'Content-Type': 'application/json',
};

// Users Endpoint
//
//
export const login = ((userName, password) => axios(
  `${URL}/users/login`, {
    method: 'POST',
    headers,
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

// Get All Users
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

// Get User
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

// Add User
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

// Update User
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

// Delete User
export const deleteUser = (() => axios(
  `${URL}/users/${userID}`, {
    method: 'DELETE',
    headers,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

// Update Specific User Fields
export const updateUserFields = (payload => axios(
  `${URL}/users/${userID}/update`, {
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

// Accounts
//
//

// Get All Accounts of User
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

// Get Account
export const getAccount = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.accountID}`, {
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

// Delete Account
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

// Add Account
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

// Update Account
export const updateAccount = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.accountID}`, {
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

// Transactions
//
//

// Get All Transactions for User
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

// Get All Transaction for Account
export const getAccountTransactions = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.accountID}/transactions`, {
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

// Get Transaction
export const getTransaction = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.accountID}/transactions/
  ${payload.transactionID}`, {
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

// Add Transaction
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

// Update Transaction
export const updateTransaction = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.accountID}/transactions/
  ${payload.transactionId}`, {
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

// Delete Transaction
export const deleteTransaction = (payload => axios(
  `${URL}/users/${userID}/accounts/${payload.account.accountId}/transactions/
  ${payload.transactionId}`, {
    method: 'DELETE',
    headers,
  },
)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  })
);

// Budgets
//
//

// Get All Budgets
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

// Get Budget
export const getBudget = (payload => axios(
  `${URL}/users/${userID}/budgets/${payload.budgetID}`, {
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

// Add Budget
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

// Update Budget
export const updateBudget = (payload => axios(
  `${URL}/users/${userID}/budgets/${payload.budgetID}`, {
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

// Delete Budget
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
