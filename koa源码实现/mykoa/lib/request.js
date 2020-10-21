let url = require('url')
let request = {
  get url() { // 使用get不用调用url(),ctx.request.url 就可以取值了
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request