const Post=require("../models/Post");

exports.createdPost=async (req,res)=>{
    try{
        const newPost=new Post(req.body);
        const savePost=await newPost.save();
        res.status(2001).json(savePost);

    }
    catch(err){
         res.status(500).json({
            message : err.message
         });
    }
};


exports.getPosts=async (req,res)=>{
    const {search,page=1}=req.query;
    const Page_size=1;
    const query={};

    if(search){
        query.$or=[
            {
                title : {$regex : search,$options : "i"}
            },
            {
                tags : {$in : [search]}
            }
        ];
    }

    try{
        const posts=await Post.find(query).sort({createdAt : -1})
                              .skip((page-1)* Page_size)
                              .limit(Page_size);

        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json({
            message : err.message
        });
    }
};


exports.deletePost=async (req,res)=>{
    try{
        const deleted=await Post.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({
                message : "Post not found..."
            })
        }
        res.status(200).json({
            message : "Post deleted done"
        })
    }
    catch(err){
        res.status(500).json({
            message : err.message
        });
    }
};
