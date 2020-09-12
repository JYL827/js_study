// Object.create的实现原理

let a = {b: 1}

// let c = Object.create(a)

function create(obj) {
  if(typeof obj !== 'object') { throw TypeError }
  // function Constr() {}
  // Constr.prototype = obj
  // let o = new Constr()
  // return o

  return {
    __proto__: obj
  }
}

let c = create(a)
console.log(c);