// 实现Storage,使得该对象为单例，基于localStorage进行封装,
// 实现setItem(key, value)和getItem(key)

class Strorage {
  static getInstance() { // 静态对象实例调用不了
    if(!Strorage.instance) {
    Strorage.instance = new Strorage()
  }
    return Strorage.instance
  }
  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
}

const storage1 = Storage.getInstance()
storage1.setItem('name', '蜗牛')