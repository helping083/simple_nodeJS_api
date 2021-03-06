const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

//routes
app.get('/', (req,res)=>{
    res.send('hello world')
});
app.use('/posts', postsRoute);

//connect to db
mongoose.connect('mongodb+srv://helping083:e2103443@cluster0-8mjxj.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true }, ()=>{
    console.log('cosssnnected to db')
});

app.listen(3000);