const os = require('os')
const request = require('request')
const greeting = require('./src/greeting')

//console.log(os.hostname())

// request({
//     url:'https://douban.uieee.com/v2/movie/top250',
//     json:true
// },(error, response, body)=>{
//     console.log(JSON.stringify(body, null, 2))
// })

greeting.hello()