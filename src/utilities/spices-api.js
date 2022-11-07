import axios from 'axios';
const BASE_URL = 'https://spice-tracker-jb.herokuapp.com/';

export async function getAllSpice() {
  const response = await axios.get(`${BASE_URL}`)
  if (response.status === 200) {
    return response.data
  } else {
    throw new Error('Error Retrieving Spices')
  }
}

export async function newSpice(spiceData) {
  const response = await axios.post(`${BASE_URL}`, spiceData)
  if (response.status === 201) {
    return response.data
  } else {
    throw new Error('Error creating new spice')
  }
}

export async function deleteOneSpice(spiceData) {
  const response = await axios.delete(`${BASE_URL}/:id}`, spiceData)
  if (response.status === 201) {
    return response.data
  } else {
    throw new Error('Error deleting one spice')
  }
}

