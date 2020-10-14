http 头部字段:
请求头
use-agent:
响应头
set-cookie: 后端设置cookie

通用头:
三种Content-type: application/x-form-url-endcode | application/json | multipart/form-data
 <input name="name">
 <input pwd="pwd">
 响应格式:
 application/x-form-url-endcode: name=XXX&pwd=xxx
 application/json: {nameL: XXX, pwd: XXX}
 multipart/form-data:
 ----分割符------
 name=xxxxx
-----分割符------
pwd=xxxx
-----分割符------