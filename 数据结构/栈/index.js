// 栈，线性结构，特点: 在某一端添加或删除数据，遵循先进后出的原则

class Stack {
  constructor() {
    this.Stack = []
  }
  push(item) {
    this.Stack.push(item)
  }
  pop() {
    this.Stack.pop()
  }
  peek() {
    return this.Stack[this.getCount() - 1]
  }
  getCount() {
    return this.Stack.length
  }
  isEmpty() {
    return this.getCount === 0
  }
}