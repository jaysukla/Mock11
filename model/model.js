const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/Mock11');



const Trip= mongoose.model('trip',mongoose.Schema({
name:String,
email:String,
destination:String,
no_travelers:Number,
budget_per_person:Number

}))



module.exports={connection,Trip}