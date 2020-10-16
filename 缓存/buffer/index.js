const Koa = require('koa');
const md5 = require('md5')
const app = new Koa();
const path = require('path');
const router = require('koa-router')();

router.get('/', async function (ctx) {
  ctx.body = `
  <html>
    <body>hello world</body>
    <script src="./a.js"></script>
  </html>
  `
});
router.get('/a.js', async function(ctx) {
  const fs = require('fs')
  const js = fs.readFileSync('./a.js', 'utf8')
  const etag = md5(js)
  if (ctx.headers['if-none-match'] === etag) {
    ctx.status = 304 // 告诉浏览器内容没有变化
    ctx.body = ''
    return
  }
  // http 1.0 expires: 2020-10-16: 17:00 浏览器时间可以修改，有可能导致缓存失败
  // http 1.1 200 请求是不会来到服务器的 浏览器把上一次得到的内容取出来用
  // (from memory/disk cache)
  ctx.set('Cache-Control', 'public, max-age=30')
  
  // md5
  // 能够根据文件内容生成的 hash字符串
  // md('js') => 'xxxx'
  // md('js1') => 'xxx1'
  // 输入一样，输出也一样，输入不一样，输出也不一样
  ctx.set('ETag', etag)
    // 强缓存优先生效
  // 30s 之后请求就会来到服务器
  // 顺便用if-none-match把上一个的etag带回来


  // 使用last-modified 
  // last-modified: 上一次的文件修改时间
  // 文件的修改时间变了，文件内容就变了
  // ctx.set('last-modified', '文件修改时间')
  // 大文件的时候 hash 耗时比较久 取修改时间

  ctx.body = js
})


app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(9090, () => {
  console.log('server is running 9090');
});
