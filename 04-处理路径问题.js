const { log } = require('console')
const fs = require('fs')

fs.readFile('./files/1.txt',function (err,dataStr) { 
    if(err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功' + dataStr);
 })