const { log } = require('console')
const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    // req 客户端相关属性
    const str = `中文路经: ${req.url},request method:${req.method}`
    console.log(str);
    // res为响应内容
    // 中文乱码问题
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 指定内容,响应给客服端
    res.end(str)
})
server.listen(80, ()=> {
    console.log('http://127.0.0.1:80');
})