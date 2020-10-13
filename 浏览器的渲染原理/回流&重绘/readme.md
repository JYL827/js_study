# 回流(Reflow) && 重绘(Repaint)
回流: 计算渲染树中每个节点在设备视口的确切位置和大小，这个计算的阶段

重绘: 拿到渲染树中节点的几何信息后，将节点转换为屏幕上的实际像素，这个阶段叫重绘节点

# 何时发生回流重绘
  发生回流:
  1. 添加或删除可见的DOM元素
  2. 元素的位置发生变化
  3. 元素的尺寸发生变化(宽高、边框大小、内外边距)
  4. 内容发生变化(文本变化，替换不同尺寸的图片)
  5. 页面初次渲染
  6. 浏览器窗口尺寸变化

  - 回流一定会重绘，重绘不一定会回流


# 浏览器的优化机制
  目前大多数浏览器都会通过队列化修改批量的回流过程，浏览器会将修改操作放到队列里，直到一段时间后或者达到阈值，才会一次性全部回流，清空队列

  - 但是，获取布局信息的操作，会强制队列刷新
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  clientTop、clientLeft、clientWidth、clientHeight
  getComputedStyle()
  getBoundingClientRect

# 减少回流重绘
修改单一DOM:
  1. cssText
  2. 使用类名

批量修改DOM:
  1. 使元素脱离文档流，对其进行多次修改，将元素带回文档流中

脱离文档流的方式:
  1. 隐藏元素 display: none;
  2. 使用文档片段构建子树，再拷贝回文档
  3. 将原始元素拷贝到脱离文档的节点中，修改后再替换原始元素