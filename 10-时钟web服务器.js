// 模块的导入
const http = require('http')
const fs = require('fs')
const path = require('path')
const { log } = require('console')

// 服务器
const server = http.createServer()

// 服务器响应
server.on('request', (req,res) =>  {
    // 拿到路径(这样写要手动输入路劲)
    const url = req.url
    // const fpath = path.join(__dirname,url)
   

    // 修改路径
    let fpath = ''
    if(url === '/') {
        fpath = path.join(__dirname,'./clock/index.html')
    }else {
        fpath = path.join(__dirname,'./clock',url)     
    }
    // 中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 打印读取文件
    fs.readFile(fpath,'utf8',(err,dataStr) => {
        // 读取判断
        if(err) return res.end('404 NOT FOUND')
        res.end(dataStr)
    })
})

// 客服端的反馈
server.listen(80, () => {
     console.log('http://127.0.0.1');
})