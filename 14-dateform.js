// 定义时间格式化方法
function dataForm(dtStr) { 
    const dt = new Date(param)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getMilliseconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
 }


// 定义补零的函数
function padZero(n) { 
    return n > 9 ? n: '0' + n
 }

module.exports = {
    dataForm
}