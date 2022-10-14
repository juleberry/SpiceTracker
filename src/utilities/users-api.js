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

export async function logIn(credentials) {
  const response = await axios.post(BASE_URL, JSON.stringify(credentials),
    {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    }
  )
  if (response.status === 201) {
    return response.data
  } else {
    throw new Error ('Invalid Log In!')
  }
}