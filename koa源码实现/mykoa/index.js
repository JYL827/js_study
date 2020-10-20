// const http = require('http')

// const response = require("./lib/response");

// const serve = http.createServer((req, res) => {
//   res.end('hello world')
// })

// serve.listen(3000)

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello'
// })

// app.listen(3000)


let Koa = require('./lib/application')
let app = new Koa()

app.use((req, res) => {
  res.end('hello world')
})

app.listen(3000)