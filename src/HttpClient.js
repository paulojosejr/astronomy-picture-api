import axios from "axios"

const nasaEndpoint = 'https://api.nasa.gov/'
const nasaApiKey = 'jAvtfuyoi93q6KCFS73AyRzh1B9708SZDrywXiBy'

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod`)
  },
}