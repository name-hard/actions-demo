import axios from './http'

const api = {
  base: {
    list: params => axios.get('/todos/1', { params: params })
  }
}

export default api
