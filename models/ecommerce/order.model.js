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
    }
},{timestamps:true});


export const Order=mongoose.model('Order',orderSchema);