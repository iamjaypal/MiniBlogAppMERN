const errorHandler =(err,req,res,next)=>{
    // console.error("Print the my error",err.stack);
    res.status(500).json({
        message : "Our System has something wrong....."
    });
    next();
    
}
module.exports=errorHandler;