# import和require的区别
  import export/export default 是属于es官方的引入方式
  require export === module export 属于民间的，可以手写
# cookie存什么东西，怎么存，哪些属性
  1. cookie(很小，只有4kb) 和localstore(5mb) sessionStorage(5mb)都属于前端存储，
      如果cookie里面有内容，会自动把cookie当做请求头传输给后端
  2. 属性
      domain 域名 
      path 路径 
      expires 过期时间
      httpOnly 只在http环境下传输，js无法操作(减少XSS攻击)
      secure 只在传输协议为https的请求环境下传输
      sameSite： strict (只有在baidu.com请求api.baidu.com 才会传输到baidu.com，解决跨站请求伪造的问题)
                 none 
                 lax (有时行，有的时候不行)

# css 布局方案
float
position
normal flow
  - inline-level-box ifc
  - block-level-box  bfc
flex
grid