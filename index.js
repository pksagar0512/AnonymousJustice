const express=require('express')
const app=express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/CSE2')
.then(()=>{console.log('MongoDB is Connected')})
.catch((err)=>{console.log('Connection Error',err)})

const user = require('./schema')
app.use(express.urlencoded({extended : true }))
app.use(express.static('public'))
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/public/register.html')
  })

app.post('/register',(req,res)=>{
    const NewUser = new user({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Email : req.body.Email
    })
    NewUser.save()
    .then(()=>res.send('Data is Saved succsusfully'))
    .catch(err=>res.status(500).send('Error saving data' + err.message))
})
app.listen(8000,()=>{
    console.log('http://localhost:8000')
})