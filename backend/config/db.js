const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_url);
        console.log("Database has been connected");
        
    }
    catch(err){
        console.error("Database has error to connect...",err);
        process.exit(1);
    }
}

module.exports=connectDB;