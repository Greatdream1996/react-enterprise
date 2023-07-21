import axios from 'axios'

const service = axios.create()

service.interceptors((config) => {
  return config
})

service.interceptors.request.use((config) => config)
service.interceptors.response.use((config) => config)

export default service
