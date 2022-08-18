// 导入fs和path模块
const { log } = require('console')
const fs = require('fs')
const path = require('path')
// 匹配style和script
// \ 转义  [\s\S] 空白和非空白字符  *多次匹配
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取html文件
fs.readFile(path.join(__dirname,'index.html'),'utf8',function (err,dataStr) { 
    // 判断是不是读取成功
    if(err) return console.log('读取失败' + err.message);
    //  成功了 
    resvolveCSS(dataStr) 
    resvolveJS(dataStr)
    resvolveHTML(dataStr)
    console.log(dataStr);
 })

// 定义处理css的方法
function resvolveCSS(htmlStr) { 
    // 正则提取想要的内容
    const r1 = regStyle.exec(htmlStr)
    // 提取出来的字符串进行替换
    const CSS = r1[0].replace('<style>','').replace('</style>','')
    // 写入文件
    fs.writeFile(path.join(__dirname,'.\clock\index.css'),CSS,err => {
        if(err) return console.log('失败');
        console.log('ok');
    })
 }


// 提取js
function resvolveJS(htmlStr) { 
    // 正则提取想要的内容
    const r2 = regScript.exec(htmlStr)
    // 提取出来的字符串进行替换
    const NEWJS = r2[0].replace('<script>','').replace('</script>','')
    // 写入文件
    fs.writeFile(path.join(__dirname,'./clock/index.js'),NEWJS,err => {
        if(err) return console.log('失败');
        console.log('ok');
    })
 }


//  html文件
function resvolveHTML(htmlStr) { 
    //css和js替换成外联
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    // 写入这个文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,err => {
        if(err) return console.log('no');
    })
    console.log('ok');
}