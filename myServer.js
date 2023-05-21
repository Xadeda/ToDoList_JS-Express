// const http = require('http');
// const server = http.createServer((req , res) => {
// });
// server.listen(3000);

////////////////////////////////////////////////////////

// import {resolve, join, parse} from 'path';
// import fs from 'fs';
//mez beruma nerka papken u gcum<currentdir> - mej   const currentDir = resolve();   

// filePath- beruma tvyan file //    const filePath = join(currentDir, 'audi.txt');
// console.log(parse(filePath));

// fs.readFile(filePath, 'utf-8', function(err, text){
//         console.log(text);
// });
///////es string@ uxarkeci nor sarqac file mej///
// let string = 'vmb sx,vbsdvsmdnvbsdnmvbsdbvkj dsf,fbdfbldfb'
/////////////////////////////77


// karduma file (promisov)//
// fs.promises.readFile(filePath, 'utf-8').then((text)=>{
//     console.log(text);
// });

//stexcel file u mej@ grel///
////utf-i poxaren en text@ vor piti lini ira mej
// fs.promises.writeFile(filePath, `${string}`);

///////////////////////////////////////
////file jnjel@ 
// senc cuyces talis te vor file jnji  ///const filePath = join(currentDir, 'hopar.txt');
// fs.promises.unlink(filePath);
/////////////////////////////////

// import { resolve , join } from 'path';
// import fs from 'fs';
// let currentDir = resolve();
// let filePath = join(currentDir, 'note');

// fs.writeFile(join(currentDir, 'notes2', 'may.txt'),
//         'hallo',
//         (err)=>{
//             console.log('ok');
//         }
// );



// fs.rename('world', 'worldworld', () => {
//     console.log("File Renamed!");
// })
//////////////////////////////rename

// fs.mkdir('notes' , function(){
//     console.log('ok');

//     fs.appendFile(filePath ,  'mynote.txt'), err =>{
//         if (err) throw err
//         console.log('dgsdg');
//     };
// });





// fs.mkdir('notes', function(){
//         // console.log('yes');

//         fs.appendFile('data.txt' , '132 , 456, 789', function(){
//             console.log('is ok');
//         });
// });





///////////////////////////////////////////









// console.log(currentDir, 'notes');

// fs.writeFile(filePath, `${info}` , function(){
//     console.log('ist shon bereit');
// });
// fs.promises.writeFile(filePath, `${info}`);

// fs.readFile(filePath, 'utf-8', function(err , data){
//     if (err) {
//         console.log('err'); 
//     } 
//     else{
//          console.log('gut');
//          console.log(data);
//     }

// })

// fs.promises.readFile(filePath, 'utf-8')
//             .then(data => {
//                     console.log(data);
//                 }
//             );

// fs.promises.unlink(filePath);
// fs.promises.writeFile(filePath, `${info}`)
// fs.promises.writeFile(filePath, `${info}`);
// fs.writeFile(filePath, `${info}` , function(){
//     console.log('ist shon bereit');
// });
// fs.promises.readFile(filePath, 'utf-8')
//             .then(data =>{
//                 console.log(data);
//             });

// fs.promises.unlink(filePath);

// fs.mkdir(filePath, 'notes');


///////////////HTTP/////////////////////    

// import { resolve , join } from 'path';
// import fs from 'fs';
// import {createServer} from 'http';
// createServer();
// let currentDir = resolve();
// let filePath = join(currentDir, 'note');

// const server = createServer((req, res)=>{
//     if (req.url === '/') {
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.end('<h1>hallo node.js</h1>');
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.end('<h1>about node.js</h1>');
//     }else{
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         res.end('<a href="https://www.google.com/">Visit Google</a>')
//     }
    
// });

// server.listen(2500);

