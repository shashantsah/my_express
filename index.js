const express=require("express");
const path = require("path");

const app=express();
const port=3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

app.get('/',(req,res)=>{
  
    var baseurl=req.protocol +"://"+req.get("host");
    res.render('home',{Title: 'Homepage', message: 'Welcome!',baseurl});

})
app.get('/login',(req,res)=>{
 

    var baseurl=req.protocol +"://"+req.get("host");
    res.render('login',{baseurl});

})
app.get('/register',(req,res)=>{
    console.log("hit from user");
    var baseurl=req.protocol +"://"+req.get("host");
    res.render('register',{baseurl});

})
app.get('/product',(req,res)=>{
    console.log("hit from user");
    var baseurl=req.protocol +"://"+req.get("host");
    res.render('product',{baseurl});

})
app.listen(port,()=>{
    console.log("listening on port ${port}")
})



// console.log("hit from home");
// res.send("hello");
// res.send('<div><h2>Hello html</h2><p>hi</p></div>');
// res.json({name:"rahul",age:24,phone:[123,234,456]});
// res.sendFile(path.join(__dirname,'../1.jpg'));
// res.redirect("https://www.google.com");
// res.redirect("user");
// res.render('/Users/shashantkumar/Desktop/my_express/pages/index.ejs', { Title: 'Homepage', message: 'Welcome!' });