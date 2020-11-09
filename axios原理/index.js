axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.method = 'get'
    console.log('被我请求拦截器拦截了', config)
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    // 对响应数据做些什么
    console.log('被我响应拦截到了')
    // console.log(res);
    res = {message: '响应拦截替换的数据'}
    return res
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)
