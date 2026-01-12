import mongoose from "mongoose";
const fileSchema =new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Admin",
    required:true

  },
  fileName:{
    type:String,
    required:true,
  },
  fileType:{
    type:String,
    required:true
  },
  filesize:{
    type:Number,
    required:true
  },
  s3BucketKey:{
    type:String,
    required:true
  },
  uploaded: {
      type: Boolean,
      default: false,
    },
},
{timestamps:true}
)

export default mongoose.model("file",fileSchema)