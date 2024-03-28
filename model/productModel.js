const mongoose = require("mongoose");

const proSchema = mongoose.Schema({
    productName : {
        type : String,
        required : true
    },
    productPrice : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
})

module.exports = mongoose.model("Products",proSchema);