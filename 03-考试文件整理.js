const { log } = require('console')
const fs = require('fs')


fs.readFile('./files/成绩.txt','utf8',function (err,dataStr) { 
    // 判断是不是读取成功
    if(err) {
        return console.log('读取失败' + err.message);
    }
    // console.log('读取成功' + dataStr);
    // 成绩处理
    // 1.成绩的数组，按空格分割
    const arrOld = dataStr.split(' ')
    // console.log(arrOld);
    // 2.循环分割的数组，进行字符串替换操作
    var arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',': '))
    })
    // console.log(arrNew);
    // 3. 分割后的进行合并
    // 回车换行
    const newStr = arrNew.join('\r\n');

    // 写入到文件里面
    fs.writeFile('./files/成绩-ok.txt',newStr,err => {
        if(err) { 
            return console.log('添加失败' + err.message);
        }
        console.log('写入成功');
    })
 })