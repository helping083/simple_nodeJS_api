const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all posts
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.json(err);
    }
});
//create a post
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const newPost = await post.save();
        res.json(newPost);
    }catch(err) {
        res.json(err);
    }
});

//get a specific post
router.get('/:postId', async (req,res)=>{
    try{
        let singlePost =  await Post.findById(req.params.postId);
        res.json(singlePost);
    }catch(err){
        res.json(err);
    }
});

module.exports = router;