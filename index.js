// const os = require('os');
// const request = require('request');
// const greeting = require('./src/greeting');
// const EventEmitter = require('events');
// const fs = require('fs');
const http = require('http');

//console.log(os.hostname())

// request({
//     url:'https://douban.uieee.com/v2/movie/top250',
//     json:true
// },(error, response, body)=>{
//     console.log(JSON.stringify(body, null, 2))
// })

//greeting.hello()

//---------------------------------------------------------------------Events

// class Player extends EventEmitter {}
// var player = new Player();
// player.on('play', (track) => {
//     console.log(`playing...: ${track}`)
// })
// player.emit('play', 'goodby idea');

//---------------------------------------------------------------------File System

// fs.stat('index.js', (error, stats) => {
//     if(error){
//         console.log(error);
//     }else {
//         console.log(stats);
//         console.log(`file: ${stats.isFile()}`);
//         console.log(`dir: ${stats.isDirectory()}`);
//     }
// });

// fs.mkdir('logs', (error)=>{
//     if(error){
//         console.log(error);
//     }else {
//         console.log('success make dir: logs')
//     }
// });

// fs.writeFile('logs/hello.log', 'hello ~ \n', (error) => {
//     if(error){
//         console.log(error);
//     }else {
//         console.log('success write file')
//     }
// });

// fs.appendFile('logs/hello.log', 'hola ~ \n', (error) => {
//     if(error){
//         console.log(error);
//     }else {
//         console.log('success write file')
//     }
// });

// fs.readFile('logs/hello.log', 'utf8',(error, data) => {
//     if(error){
//         console.log(error); 
//     }else {
//         console.log(data);
//     }
// })

//---------------------------------------------------------------------Stream

// var fileReadStream = fs.createReadStream('data.json');
// var fileWriteStream = fs.createWriteStream('data-1.json');
// fileReadStream.pipe(fileWriteStream);
// var count = 0;

// fileReadStream.once('data', (chunk) => {
//     console.log(chunk)
// })
// fileReadStream.on('data', (chunk) => {
//     console.log(`${++count} receive: ${chunk.length}`)
// })


//---------------------------------------------------------------------HTTP
var options = {
    protocal: 'http:',
    hostname: 'douban.uieee.com',
    port: '80',
    method: 'GET',
    path: '/v2/movie/top250'
};

var responseData = '';

var request = http.request(options, (response) => {
    //console.log(response.statusCode)
    response.setEncoding('utf8')
    response.on('data', (chunk) => {
        //console.log(chunk)
        responseData += chunk;
    });
    response.on('end', () => {
        JSON.parse(responseData).subjects.map((item) => {
            console.log(item.title)
        })
    })
});

request.on('error', (error) => {
    console.log(error);
});

request.end();


//---------------------------------------------------------------------




//---------------------------------------------------------------------