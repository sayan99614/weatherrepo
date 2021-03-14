const express=require('express');
const http=require('http');
const hbs=require('hbs');
const path= require('path');
const app=express();
const port=process.env.port||8000;


// const staticpath=path.join(__dirname,'/views');
// console.log(staticpath);

const img_path=path.join(__dirname,'../public/images');
const css_path=path.join(__dirname,'../public/css');
const js_path=path.join(__dirname,'../public/js');

const partials_path=path.join(__dirname,'/views/partials');
app.use(express.static(img_path)); 
app.use(express.static(css_path));
app.use(express.static(js_path));

hbs.registerPartials(partials_path);

// app.use(express.static(staticpath));
app.set('view engine','hbs');

app.get("/",(req,res)=>{
    res.render('index');
})

app.get('/weather',(req,res)=>{
    res.render('search')
});

app.get('*',(req,res)=>{
    res.render("error");
})
app.listen(port,()=>{
    console.log( `the server is listning form ${port}`);
})