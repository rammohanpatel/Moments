import express from "express";
import {getPosts,createPosts} from "../controllers/posts.js"

const router = new express.Router();

router.get('/posts',getPosts);
router.post('/posts',createPosts);

export default router ;
