var data = {
  name: '元隆',
  age: 18
}

observe(data)
let name = data.name
data.name = '金龙'
function observe(obj) {
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
  function defineReactive(obj, key, val) {
    if(typeof val === 'object' && val !== null) {
      observe(val)
    }
    Object.defineProperty(obj, key, {
      get: function() {
        return val
      },
      set: function(newval) {
        val = newval
      }
    })
  }
}