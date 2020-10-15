function newFunc(Fn) {
  let o = {}
  o.__proto__ = Fn.prototype
  Fn.call(o, arguments)
  return o
}

// newFunc(Fn)

function Fn(name, age) {
  this.name = name
  this.age = age
}
let fn = new Fn()
// fn = {
//   name: '',
//   age: ''
// }
