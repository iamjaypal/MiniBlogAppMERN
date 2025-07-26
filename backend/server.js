const express=require('express');
const dotenv=require('dotenv');
const connectDB=require("./config/db");
const postRoutes=require('./routes/postRoutes');
const errorHandler=require("./middlewares/errorHandler");
const cors=require('cors');


dotenv.config();
const app=express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api",postRoutes);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("App is listing",PORT);
    
})
