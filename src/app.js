const express = require("express");
const app = express();

app.use("/",(req,res)=>{ // HERE app .use is used to respond on your request
  res.send("namaste rohit");
})

app.use("/hello",(req,res)=>{
    res.send("hello helo hello")
})

app.use("/test",(req,res)=>{
    res.send("your test is here")
})




app.listen(7777,()=>{
    console.log("server is listening"); // here your server is ready to listen for your request
})