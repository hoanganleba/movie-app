import axios from './axiosUserInstance'

const userServices = {
  getProfile(id) {
    return axios.get(`/api/profile/${id}`)
  },
  login(value) {
    return axios.post('/api/login', {
      email: value.email,
      password: value.password,
    })
  },
  register(value) {
    return axios.post('/api/register', {
      email: value.email,
      password: value.password,
    })
  },
}

export default userServices
