import axios from './axiosInstance'

const showsServices = {
  getAllShows() {
    return axios.get('/shows')
  },
  getShow(id) {
    return axios.get(`/shows/${id}`)
  },
  getAllCastsShow(id) {
    return axios.get(`/shows/${id}/cast`)
  },
  searchShows(query) {
    return axios.get(`/search/shows?q=${query}`)
  }
}

export default showsServices
