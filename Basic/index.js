const express = require("express");
const app = express()

console.dir(app);

let port = 3000;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`)
});

// app.use((req,res) => {
//     //console.log(req);
//     console.log("request received");
//     res.send({
//         name : "apple",
//         color : "red"
//     })
// });

//query String
app.get("/search",(req, res) => {
    console.log(req.query);
    res.send("no result!!!");
})

//path parameters
app.get("/:username/:id",(req,res) => {
    let {username , id} = req.params;
    res.send(`Welcome to the page of @${username}.`)
})

app.get("/apple",(req,res) => {
    res.send("you contacted apple path")
})

app.get("/orange",(req,res) => {
    res.send("you contacted orange path")
})

app.get("*",(req,res)=>{
    res.send("this path does not exist")
})

app.post("/",(req,res)=>{
    res.send("this path is post path")
})

