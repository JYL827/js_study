let proto = {}
function defineGetter(prop, name) { // prop代表对象，name代表对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象上都有__defineGetter__
    return this[prop][name]
  })
}
function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(val) {
    this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')

module.exports = proto