function Person(name) {
  this.name = name
}
// let p = new Person('Tom')

// 1. p._proto_ = ? Person.prototype
// 2. Person._proto_ = ? function Person
// 3. p = {name: Tom}

// new 的实现原理
function myNew(func) {
  return function () {
    let obj = {
      __proto__: func.prototype
    }
    func.call(obj, ...arguments)// call()方法，把func代替obj,并把...arguments作为参数传给func,此时this指向obj的作用域，所以func的值改变
    return obj // 因为前面已经把func的prototype传给obj,所以此时obj也改变
  }
}
let p = myNew(Person)('Tom')
console.log(p);