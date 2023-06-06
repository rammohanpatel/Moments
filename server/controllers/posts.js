import postMessage from "../models/Schema.js"

export const getPosts =  async(req,res)=>{
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const createPosts = async(req,res)=>{

    try {
        const post = req.body;
        const newPost = new postMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message })
    }
}