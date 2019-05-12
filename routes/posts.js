const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');


router.get('/', async (req,res)=>{
    try {   
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
     res.json({messagse: err});   
    }
});

router.post('/', async (req,res)=>{
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try {
        const savedPost =  await newPost.save();
        res.json(savedPost);
    }catch(err) {
        res.json({message: err})
    }
});

router.get('/specific', (req,res)=>{
    res.send('specific post');
});



module.exports = router;