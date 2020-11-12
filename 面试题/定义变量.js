var a = 1
console.log(window.a); // 1
let b = 2
console.log(winow.b); // undefined

// 查找声明变量的阶段，会把let声明的变量放到词法环境中，而var则放到变量环境中