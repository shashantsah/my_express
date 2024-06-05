const express=require("express");
const path = require("path");

const app=express();
const port=3000;
app.get('/',(req,res)=>{
    console.log("hit one time");
    // res.send("hello");
    // res.send('<div><h2>Hello html</h2><p>hi</p></div>');
    // res.json({name:"rahul",age:24,phone:[123,234,456]});
    res.sendFile(path.join(__dirname,'../1.jpg'));
})
app.listen(port,()=>{
    console.log("listening on port ${port}")
})