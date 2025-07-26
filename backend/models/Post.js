const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    title : String,
    content : String,
    username : String,
    tags : [String],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports=mongoose.model("Post",postSchema);