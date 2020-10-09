const http = require('http');
const qs = require('querystring')

http.createServer((req, res) => {
  if (req.url.includes('/api')) {
    let json = {
      code: 0
    }
    // callback=xx&a=1&b=2
    let fn = qs.parse(req.url.split('?')[1]).callback // 解析请求的url,变成{callback: xx, a: 1, b: 2}
    res.end(`${fn}(${JSON.stringify(json)})`)
  } else {
    res.end('')
  }
})
.listen(8088, () => {
  console.log(8088);
})