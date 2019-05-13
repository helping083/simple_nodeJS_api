const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res)=>{
    res.send('in router');
});

router.post('/', (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save().then((item)=>{
        res.json(item)
    }).catch((err)=>{res.json(err)})
});

module.exports = router;