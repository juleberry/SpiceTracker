import * as usersAPI from './users-api';

//-------
// signUp
//-------

export async function signUp(userData) {
    const response = await usersAPI.signUp(userData);
    localStorage.setItem('token', response.token)
}

//------------
// logIn
//------------

export async function logIn(userData) {
  try {
    const token = await usersAPI.logIn(userData);
    localStorage.setItem('token', token);
  } catch {
    throw new Error('Invalid Credentials');
  }
}

// logOut
export function logOut() {
  localStorage.removeItem('token');
}