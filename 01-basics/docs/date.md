创建Date
+ new Date([millisecond|datestring])
+ new Date(year,month,date,hours, minutes, seconds, ms)
创建一个 Date 对象，参数是当地时区的日期组合信息。只有前两个参数是必须的。
注意：
+ year 必须是四位数。
+ month 计数从 0 （一月） 开始，到 11 （12月）。
+ date 是当月的具体某一天，如果缺失，默认是 1。
+ 如果 hours/minutes/seconds/ms 缺失的话，它们默认值是 0。
+ 具有自动校准的特性
+ 不能只创建日期或时间，要创建两者都创建。
+ js中的时间戳是毫秒表示，不是秒或微秒。

访问日期
+ getFullYear()
+ getMouth()
+ getDate()
+ getHours() / getMinutes() / getSeconds() / getMilliseconds()
+ getDay() 从0开始(0代表星期天)
+ getUTCXXX()
+ getTime() 相对UTC+0
+ getTimeszoneOffset()

设置
+ setFullYear(year [, month, date])
+ setMonth(month [, date])
+ setDate(date)
+ setHours(hour [, min, sec, ms])
+ setMinutes(min [, sec, ms])
+ setSeconds(sec [, ms])
+ setMilliseconds(ms)
+ setTime(milliseconds) 
+ setUTCXXX()

getTime()和setTime()本身是基于UTC的方法，所有没有对应的UTC版本的方法

Date.now() 相当于new Date().getTime()，但它运行更快，不会对垃圾处理造成额外压力。

Date.parse(str)
字符串的格式是：YYYY-MM-DDTHH:mm:ss.sssZ，其中：
+ YYYY-MM-DD —— 日期：年-月-日。
+ 字符串 "T" 是一个分隔符。
+ HH:mm:ss.sss —— 时间：小时，分钟，秒，毫秒。
+ 可选字符 'Z' 代表时区。单个字符 Z 代表 UTC+0。
简短形式也是可以的，比如 YYYY-MM-DD 或者 YYYY-MM 又或者 YYYY。
Date.parse(str) 方法会转化一个特定格式的字符串，返回一个时间戳（自 1970-01-01 00:00:00 起的毫秒数），如果格式不正确，返回 NaN。

日期可相减，返回它们间隔的毫秒数。