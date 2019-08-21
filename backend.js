var express = require('express')
var app = express()



app.get('/mapDetail', function (req, res) {
    res.send({
        data: {
            center: {
              lng: 116.404,
              lat: 39.915
            },
            radius: 500
        },
        result:0,
        msg:"请求成功"
    })
})


app.listen(4444,function(){
    console.log("listen port 4444 success")
})