const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobileNum : {
        type : Number,
    },
    password : {
        type : String,
        required : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("Users",userSchema);