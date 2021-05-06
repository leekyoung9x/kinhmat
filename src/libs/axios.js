import Vue from 'vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: 'https://localhost:44317/api/v1'
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

Vue.use(VueAxios, axiosIns)

export default axiosIns
