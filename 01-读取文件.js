// 导入fs模块
const { log } = require('console');
const fs = require('fs');
//  调用readfile
// 路径 编码格式 回调函数
// 成功 err为null
// 失败 dataStr为undefind
fs.readFile('./files/1.txt','utf8',function (err,dataStr) { 
    // 判断是不是读取成功
    if(err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功',dataStr);
})

