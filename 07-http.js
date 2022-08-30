// 基本web服务器
// 导入http模块
const { log } = require('console')
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 绑定request 监听客服端的请求
server.on('request',(req,res) => {
    console.log('someone visit our web server');
})
// 启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})