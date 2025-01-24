const mongoose =require('mongoose')

const User = mongoose.Schema({
    FirstName : {
        type : String,
        required : true,
    },
    LastName : {
        type : String
    },
    Email : {
        type : String,
        required : true,
        unique : true
    }
})
const user = mongoose.model('user',User)
module.exports = user