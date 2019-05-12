const express = require('express');
const app = express();
const moongose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

//ROUTES
app.get('/', (req,res)=>{
    res.send('hello world')
});

//connect to db
moongose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },
    ()=> {
        console.log('connectesss')
    }
);

//server
app.listen(3000);