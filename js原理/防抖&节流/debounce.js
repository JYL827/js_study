// 在规定的时间内如果重复触发事件，则清除定时器，等待不触发时再发起请求
function debounce(fn) {
  let timeout
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn()
    }, 2000)
  }
}