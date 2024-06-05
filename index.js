const express=require("express");
const path = require("path");

const app=express();
const port=3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

app.get('/',(req,res)=>{
    console.log("hit from home");
    // res.send("hello");
    // res.send('<div><h2>Hello html</h2><p>hi</p></div>');
    // res.json({name:"rahul",age:24,phone:[123,234,456]});
    // res.sendFile(path.join(__dirname,'../1.jpg'));
    // res.redirect("https://www.google.com");
    // res.redirect("user");
    // res.render('/Users/shashantkumar/Desktop/my_express/pages/index.ejs', { Title: 'Homepage', message: 'Welcome!' });
    res.render('index',{Title: 'Homepage', message: 'Welcome!'});

})
app.get('/user',(req,res)=>{
    console.log("hit from user");
    // res.redirect("/");
})
app.listen(port,()=>{
    console.log("listening on port ${port}")
})