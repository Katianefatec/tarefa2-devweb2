const express = require("express")
const app = express()
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index')})
app.get('/testando',(req,res)=>{
    res.render('formulario')})
app.get('/rota3',(req,res)=>{
    res.render('rota3')})
// app.get("/", function(req, res){res.sendFile(__dirname + "/html/index.html")})
// app.get("/blog", function(req, res){res.sendFile(__dirname + "/html/blog.html")})
// app.get("/", function(requisição, resposta){resposta.send("testando")})
// app.get("/blog", function(requisição, resposta){resposta.send("testando outra rota")})
app.listen(3000, ()=>{console.log('App rodando')})