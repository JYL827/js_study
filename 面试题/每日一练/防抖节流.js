// 防抖
function debounce(fn, wait) {
  let timeout
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

// 节流
function throttle(func) {
  let timeout
  return function() {
    if(!timeout) {
      timeout = setTimeout(() => {
        func()
        timeout = null
      }, 2000);
    }

  }
}

function throttle(fn) {
  let time1 = 0
  return function() {
    let time2 = Date.now()
    if(time2 - time1 >= 2000) {
      fn()
      time1 = time2
    }
  }
}