1. es-Module 在代码静态分析的时候，就能知道你引入了哪些模块
2. webpack production 会开启tree-shaking
3. 每个模块假如存在(副作用)，想剔除它 sideEffects：false，
  基本上只要不是 pollyFill(垫片)形式的(副作用) 都能加上 sideEffects：false，
  const Promise = Promise || function Promise() { // 自己实现 }
4. 第三方模块(lodash/element-ui), 小心 他们不是 es-module
  babel-plugin-import
  import { Buttton } from 'element-ui' 转成 import Buttton from 'element-ui/Button';