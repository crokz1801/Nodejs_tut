const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    price:{
        type:Number,
        required :true

    },
    taste:{
        type:String,
    },
    is_drink:{
        type:Boolean,
    },
    ingredients:{
        type:String,
        enum:['sugar','salt','chilly'],
    },
    num_sales:{
        type:Number,
        default:0,
        required:true,
    }


})
const menu = mongoose.model('menu',menuSchema);
module.exports=menu;

// {

//     "name": "Spicy Chicken Wings",
    
//     "price": 9.99,
    
//     "taste": "Spicy",
    
//     "is_drink": false,
    
//     "ingredients": ["chicken wings", "spices",
    
//     "num_sales": 62
    
//     }