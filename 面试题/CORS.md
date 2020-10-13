# CORS 设置CORS的头部字段
  cross oringin resource share
  - Access-control-allow-origin: * | baidu.com
  - Access-control-allow-method:
  - Access-control-allow-header: content-type
  - 用法
    app.get('/', (ctx) => {
    ctx.setHeaders('Access-...')
    ctx.body = {}
    }) 
