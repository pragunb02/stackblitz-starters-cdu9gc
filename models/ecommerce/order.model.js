import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required:true,
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice:{

    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    orderItems:{
        type: [orderItemSchema],
        // mutliple items  thats why array of all orders

        //alternate
        // type:[
        //     {
        //         productId:{
        //             type:mongoose.Schema.Types.ObjectId,
        //             ref:'Product',
        //         },
        //         quantity:{
        //             type:Number,
        //             required:true,
        //         }
        //     }
        // ]
    },
    address:{
        type: String,  // might be mini model that have pin code etc..
        required: true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    }
},{timestamps:true});


export const Order=mongoose.model('Order',orderSchema);