import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        requird:true
    },
     permissions: [
      {
        type: String,
        enum: [
          "PRODUCT_CREATE",
          "PRODUCT_EDIT",
          "PRODUCT_DELETE",
          "PRODUCT_VIEW",
          "ORDER_MANAGE",
          "COUPON_MANAGE",
          "USER_MANAGE",
          "DASHBOARD_VIEW",
        ],
      },
    ],
    avatar: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
    },
},
 {
    timestamps: true,
  })

  export default mongoose.model("Admin",AdminSchema)