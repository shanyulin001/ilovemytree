const express = require('express')
const app  = express();
var Mock = require('mockjs')

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name|1': [
            '安徽松树','大兴安岭松树','陕西松树','安徽松树'
          ],
         'num|1':['111','111','1111','1111'],
         'price|1':['30','40','20','40','350','550'],
         'odl|1':["100","15","17","155"]
    }]
})
console.log(JSON.stringify(data, null, 4))
app.get('/hello/nn',(req,res)=>{
    res.send(JSON.stringify(data, null, 4))
})
app.listen('3000','localhost',()=>{
    console.log("服务器已经启动")
})