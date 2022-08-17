// 导入fs 文件系统模块
const { log } = require('console');
const fs  = require('fs');

// 调用fs
// 和readfile差不多编码格式写为添加的内容
fs.writeFile('./files/2.txt','abcc',function (err) { 
    // 文件写入成功 err为null
    // 失败为错误对象
    // 判断是不是写入成功
    if(err) {
        return console.log('文件写入失败' +  err.message);
    }
    console.log('写入成功');
 })