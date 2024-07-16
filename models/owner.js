const mongose = require('mongoose');
const userSchema  = mongose.Schema({
    fullname: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default : [],
    }
})


module.exports = mongose.model('user', userSchema);
