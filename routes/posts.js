const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

//get all the posts
router.get('/', async (req,res)=>{
    try {   
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
     res.json({messagse: err});   
    }
});

//create a new post
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
//get a specific post
router.get('/:postId', async (req,res)=>{
    try {
        const singlePost = await Post.findById(req.params.postId);
        res.json(singlePost);
    } catch(err) {
        res.json({message: err})
    }
   
});
// delete a posts
router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await Post.remove({
            _id: req.params.postId
        });
        res.json(removedPost);
    }catch(err) {
        res.json({message: err})
    };
});


module.exports = router;