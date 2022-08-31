const { log } = require('console')
const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    // 请求URL地址
    const url = req.url
    // 设置默认为404 not found
    let content = '<h1>404 not found</h1>'
    // 判断请求是不是首页
    if(url === '/' || '/index.html') { 
        content = '<h1>首页</h1>'
    }else if(url === '/about') { 
        content = '<h1>关于页面</h1>'
    }

    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 内容发给客服端
    res.end(content)
})
server.listen(80, ()=> {
    console.log('http://127.0.0.1:80');
})