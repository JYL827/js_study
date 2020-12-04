function deepCopy(obj1) {
  let obj2 = Array.isArray(obj1) ? [] : {}
  if(obj1 && typeof obj1 === 'object') {
    for(let i in obj1) {
      if(obj1.hasOwnproperty(i)) {
        if(obj1[i] && typeof obj1[i] === 'object') {
          obj2[i] = deepCopy(obj1[i])
        }
      } else {
        obj2[i] = obj1[i]
      }
    }
  }
}
