// 题目

// 填充 inherit 完成输出。
function inherit(PConstructor, prototyObj) {
  function F(name) {
    PConstructor.call(this, name) // 继承属性
  }
  F.prototype = prototyObj  // 给自身加了个prototype
  F.prototype.__proto__ = PConstructor.prototype   // 继承方法
  return F
}

let animalNum = 0;
function Animal(name) {
  animalNum ++;
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};
const Cat = inherit(Animal, {  
  say:function() {
      console.log(`NO${animalNum}:${this.getName()}`);
  }
});
const cat1 = new Cat('小花');
cat1.say(); // NO1:小花
