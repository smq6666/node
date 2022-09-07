// 导入自定义的格式化时间的模块
const Times = require('./14-dateform')


// 调用方法，进行时间的格式化
const dt = new Date()
// console.log(dt);
const newDT = Times.dataForm(dt);
console.log(newDT);