const express=require('express');
const router=express.Router();
const {
    createdPost,
    getPosts,
    deletePost
}=require("../controllers/postController");

router.post("/posts",createdPost);
router.get("/posts",getPosts);
router.delete("/posts/:id",deletePost);

module.exports=router;