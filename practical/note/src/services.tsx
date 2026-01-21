import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/notes'

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