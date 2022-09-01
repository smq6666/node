// 作用域
// const username = 'zhangsan'
// function sayHello(param) { 
//     console.log('我会唱歌');
//  }


// module.exports()
// 共享成员
module.exports.username = 'zs'

module.exports.sayHello = function() { 
        console.log('我会唱歌');
     }

// 永远以指向的对象为准
module.exports = {
    name: '12',
    say() {
        console.log('ok');
    }
}

