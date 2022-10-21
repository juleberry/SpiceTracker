import * as spicesAPI from './spices.api';
import { getToken } from './users-service';
import { getSpices } from './spices.api';

export async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

export async function spiceIndex (spiceData) {
  const response = await spicesAPI.spiceIndex(spiceData);
  spiceIndex.map().then(spiceData => {
    response.json(spiceData)
    console.log('view spices')
  })
  return spiceIndex();
}

export async function newSpice(spiceData) {
  const response = await spicesAPI.newSpice(spiceData);
  newSpice.save().then(spiceData => {
    response.json(spiceData)
    console.log('spice created')
  })
  return newSpice();
}

export async function deleteSpice (spiceData) {
  const response = await spicesAPI.deleteSpice(spiceData);
  deleteSpice.save().then(spiceData => {
    response.json(spiceData)
    console.log('spice deleted')
  })
  return getSpices();
}

export async function updateSpice(spiceData) {
  const response = await spicesAPI.updateSpice(spiceData);
  updateSpice.save().then(spiceData => {
    response.json(spiceData)
    console.log('spice details updated')
  })
  return updateSpice();
}