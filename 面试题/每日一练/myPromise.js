function MyPromise(fn) {
  let self = this
  this.value = undefined
  this.status = 'PENDING'
  function onResolve(value) {
    self.status = 'FULLFILLED'
    self.value = value
    self.onFullfilled && self.onFullfilled(value)
  }
  function onReject(reason) {
    self.status = 'REJECTED'
    self.value = reason
    self.onFailed && self.onFailed(value)
  }
  fn(onResolve, onReject)
}
MyPromise.prototype.then = function(onFullfilled, onFailed) {
  if(this.status = 'PENDING') {
    this.onFullfilled = onFullfilled
    this.onFailed = onFailed
  } else if(this.status = 'FULLFILLED'){
    onFullfilled(this.value)
  } else if(this.status = 'REJECTED') {
    onFailed(this.value)
  }
}



const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null // resolve/reject 接收的值
  that.resolvedCallbacks = [] // .then(() => {})
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        return cb(that.value)
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        return cb(that.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected: r => { throw r}

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}
