Array.prototype.filter = function (fn) {
  let res = []
  for(let item of this) {
    if(fn(item)) {
      res.push(item)
    }
  }
  return res
}
let arr = [1, 2, 3]
let arr2 = arr.filter(function(item){
  return item > 2
})
console.log(arr2)