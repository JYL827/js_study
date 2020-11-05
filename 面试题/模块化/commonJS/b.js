const mod = require('./a.js')
console.log(mod.c, mod.obj); // 3
mod.inc()
// 导入的值就是把导出的值复制(拷贝)一份过来
console.log(mod.c, mod.obj); // 不会变，还是3