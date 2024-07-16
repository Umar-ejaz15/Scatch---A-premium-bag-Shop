const mongose = require('mongoose');
const userSchema  = mongose.Schema({
    fullname: String,
    email: String,
    password: String,
    contact: Number,
    isadmin: Boolean,
    cart:{
        type: Array,
        default : [],
    },
    orders: {
        type: Array,
        default : [],
    }
})


module.exports = mongose.model('user', userSchema);
