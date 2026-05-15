请写出一个函数统计以下给出数据的各个主域名下站点的数量
Input: 
var urls = [
    { host: "eigentech.ai", name: "Eigen" },
    { host: "ant.design", name: "Ant Design" },
    { host: "jianshu.com", name: "Jianshu"},
    { host:"ecma-international.org", name: "ecmascript"},
    { host:"githum.com", name: "github"},
    { host:"w3c.org", name: "W3C"},
    { host: "alibaba.com", name: "Alibaba"}
]

output:
 result = {
     "ai": 1,
     "design": 1,
     "org": 2,
     "com": 3
}