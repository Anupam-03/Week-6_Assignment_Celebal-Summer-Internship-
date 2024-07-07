const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cartItems: {
        type: Number,
        default: 0
    },
    shopping: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);