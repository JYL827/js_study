function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
let arr = [1, [2, [3, [4]]]]
flatten(arr)

function flat(arr) {
  let stack = [...arr]
  let res = []
  while(stack.length) {
    let item = stack.pop()
    if(Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.unshift(item)
    }
  }
  return res
}

flat(arr)