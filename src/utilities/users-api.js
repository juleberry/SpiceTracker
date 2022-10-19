import axios from 'axios';
const BASE_URL = '/api/users';

export async function signUp(userData) {
  const response = await axios.post(BASE_URL, userData)
  if (response.status === 201) {
    return response.data
  } else {
    throw new Error('Invalid Sign Up!')
  }
}

export async function logIn(userData) {
  const response = await axios.post(`${BASE_URL}/login`, userData)
  if (response.status === 200) {
    return response.data
  } else {
    throw new Error('Invalid Log In!')
  }
}