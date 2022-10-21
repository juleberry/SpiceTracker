import axios from 'axios';
import { sendRequest } from './spices-service';
const BASE_URL = '/api/spices';

export function getSpices() {
  return sendRequest(BASE_URL);
}

export async function spiceIndex(spiceData) {
  const indexed = await axios.get(`${BASE_URL}`)
  if (indexed.status === 201) {
    return indexed.data
  } else {
    throw new Error('Error Indexing Spices')
  }
}

export async function newSpice(spiceData) {
  const addNew = await axios.get(`${BASE_URL}/new`, spiceData)
  if (addNew.status === 201) {
    return addNew.data
  } else {
    throw new Error('Error Adding New Spice')
  }
}

export async function deleteSpice(spiceData) {
  const deleted = await axios.delete(`${BASE_URL}/:id`, spiceData)
  if (deleted.status === 201) {
    return deleted.data
  } else {
    throw new Error('Error Deleting Spice')
  }
}

export async function updateSpice (spiceData) {
  const updated = await axios.put(`${BASE_URL}`, spiceData)
  if (updated.status === 201) {
    return updated.data
} else {
  throw new Error('Error Updating Spice')
  }
}

export async function createSpice (spiceData) {
  const created = await axios.post(`${BASE_URL}`, spiceData)
  if (created.status === 201) {
    return created.data
} else {
  throw new Error('Error Creating Spice')
  }
}

export async function editSpice (spiceData) {
  const result = await axios.get(`${BASE_URL}/:id/edit`, spiceData)
  if (result.status === 201) {
    return result.data
} else {
  throw new Error('Error Editing Spice')
  }
}

export async function viewSpice (spiceData) {
  const view = await axios.get(`${BASE_URL}/:id`, spiceData)
  if (view.status === 201) {
    return view.data
} else {
  throw new Error('Error Showing Spice Details')
  }
}