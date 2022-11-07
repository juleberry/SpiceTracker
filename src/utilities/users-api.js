import axios from 'axios';
const BASE_URL = 'https://spice-tracker-jb.herokuapp.com/';

export async function signUp(userData) {
  try {
  const response = await axios.post(`${BASE_URL}`, userData)
  if (response.status === 201) {
    return response.data
  } else {

    throw new Error('Invalid Sign Up!')
  }
  } catch(error) {
    console.log(error.response.data)
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