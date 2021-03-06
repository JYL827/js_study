// 写一个日期格式化函数
const dateFormat = (dateInput, format)=>{
  return format.replace('yyyy', dateInput.getFullYear())
  .replace('MM', dateInput.getMonth() + 1)
  .replace('dd', dateInput.getDate())
}

dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日