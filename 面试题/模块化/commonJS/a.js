var c = 3
var obj = {v: true}
function inc() {
  c++,
  obj.v = false
}
module.export = {
  c,
  inc,
  obj
}