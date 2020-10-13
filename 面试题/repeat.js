/*
  repeat 实现，使用JS实现一个repeat方法，
  调用这个 repeatedFunc("hellworld")，
  会alert4次 helloworld, 每次间隔3秒
  function repeat(func, times, wait) {

  }
  const repeatFunc = repeat(alert, 4, 3000)
  repeatedFunc("hellworld")
*/

// 高阶函数 => 高阶组件
// 函数是一等公民: 函数和其他类型(bool,string,number)一样都可以作为函数参数传递，也可以作为函数的返回值返回
function repeat(func, times, wait) {
  return (args) => {
    for(let i = 0; i < times; i++) {
      setTimeout(() => {
        func(args)
      }, i * wait);
    }
  }
}
const repeatFunc = repeat(alert, 4, 3000)
repeatFunc("hellworld")