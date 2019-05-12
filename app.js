const express = require('express');
const app = express();
const moongose = require('mongoose');
require('dotenv/config');

//ROUTES
app.get('/', (req,res)=>{
    res.send('hello world')
});

app.get('/posts', (req,res)=>{
    res.send('smth went wrong');
})

//connect to db
moongose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },
    ()=> {
        console.log('connectesss')
    }
)


//server
app.listen(3000);