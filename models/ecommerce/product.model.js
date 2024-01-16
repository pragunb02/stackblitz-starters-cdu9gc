// product kiss category mai hai

import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    description:{
        require:true,
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{  // database buffer ,aws (cloundinary)public url link
        type:String,
    },
    price:{
        trye:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    // 
},{timestamps:true});

export const Product=mongoose.model('Product',productSchema);