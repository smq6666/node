const { log } = require('console')
const fs = require('fs')

// 一定不要忘记加\
// 移植性差
// fs.readFile('C:\\Users\\代如六\\Desktop\\网页\\node\\files\\1.txt',function (err,dataStr) {   
//     if(err) {
//         return console.log('读取失败' + err.message);
//     }
//     console.log('读取成功' + dataStr);
//  })

// __dirname 表示当前路径
fs.readFile(__dirname + '01.txt',function (err,dataStr) {   
    if(err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功' + dataStr);
 })