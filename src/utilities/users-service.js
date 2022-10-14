import * as usersAPI from './users-api';

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function getToken() {
  const token = localStorage.getItem('token')
  if (!token) return null;
// removes expired token
  const payload = JSON.parse(atob(token.split('.')[1]));

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null
  }

  return token;
}


//-------
// signUp
//-------

export async function signUp(userData) {
  try {
    const response = await usersAPI.signUp(userData);

    localStorage.setItem('token', response.jwt_token)

    return getUser();
  } catch {
    throw new Error ('Invalid Sign Up')
  }
}

//------------
// logIn
//------------

export async function logIn(credentials) {
  try {
    const token = await usersAPI.logIn(credentials);
    localStorage.setItem('token', token);
    return getUser();
  } catch {
    throw new Error('Invalid Credentials');
  }
}

// logOut
export function logOut() {
  localStorage.removeItem('token');
}