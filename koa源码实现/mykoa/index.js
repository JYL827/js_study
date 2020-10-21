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

app.use((ctx) => {
  // res.end('hello world')
  // console.log(ctx);
  // console.log(ctx.req.url);
  // console.log(ctx.request.req.url);
  // console.log(ctx.response.req.url);
  // console.log(ctx.request.url);
  // console.log(ctx.request.path);
  // console.log(ctx.url);
  // console.log(ctx.path);
  ctx.body = 'hello world'
  console.log(ctx);

})

app.listen(3000)