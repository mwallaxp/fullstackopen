import axios from 'axios'
const baseUrl = 'https://fullstackopen-1-93vq.onrender.com/api/notes/'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject: any) => {
  return axios.post(baseUrl, newObject)
}

const update = (id: string, newObject: any) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}