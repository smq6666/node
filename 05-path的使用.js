const { log } = require('console')
const path = require('path')
// ../会抵消前面的一个路径
const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr);

// 拼接路径
// 不要用加号都用path.join
const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2);

// 获取路径中的文件名
const fpath = './files/1.txt'
const fullName = path.basename(fpath)
console.log(fullName);

// 去掉文件后缀名
const name = path.basename(fpath,'.txt')
console.log(name);


// 获取扩展名
const fext = path.extname(fpath)
console.log(fext);