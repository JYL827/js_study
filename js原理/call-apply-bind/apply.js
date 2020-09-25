Function.prototype.myapply = function(context) {
  if(typeof this != 'function') {
    throw new TypeError('Bind must be called on a function')
  }
  context = context || window // 当没有传参数时，作用域直接指向全局，如 fn.aplly()
  const args = arguments[1]
  const fn = Symbol('fn')
  context[fn] = this

  const result = context[fn](...args)

  delete context[fn]
  return result
}

