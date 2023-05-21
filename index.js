import express from 'express';
const app = express();
import fs from 'fs';
import path from 'path';
app.use(express.static("public"))
app.use(express.json());


app.get("/", (req, res) =>{
    req.redirect("/index.html")
})
// let taskList = [
//     {
//     id: '0',
//     title: 'lern TS',
//     done: false,
//     },
//     {
//         id: '1',
//         title: 'lern JS',
//         done: false,
//     },
//     {
//             id: '2',
//             title: 'lern Node:js',
//             done: false,
//     },
    
// ]


app.get("/taskList", (req, res) =>{
    fs.promises.readFile(path.resolve("data.json"), "utf8").then((taskList) =>{
        res.send(taskList)
    });

});

app.post("/taskList", (req, res)=>{
    fs.promises
    .writeFile(path.resolve("data.json"), JSON.stringify(req.body, undefined, 2))
    .then(()=>{
        res.send("ok")
    })
})

app.listen(3000);




