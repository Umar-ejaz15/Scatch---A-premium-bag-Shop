const mongose = require('mongoose');

const productSchema = mongose.Schema({
    image: String,
    name: String,
    price: Number,
    bgcolor: String,
    panalcolor: String,
    textcolor: String,
    discount: {
        type: Number,
        default: 0,
    },
})


module.exports = mongose.model('product', productSchema);
