import mongoose from "mongoose";

const connectDB=async()=>{
    try{
       const conn=await mongoose.connect(process.env.Mongo_uri||"mongodb+srv://himanshukumar:try123@cluster0.aoqgtlt.mongodb.net/project1?retryWrites=true&w=majority");
       console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;