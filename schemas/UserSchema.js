const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: 'string',
        required: true,
        trim: true
    },
    username: {
        type: 'string',
        required: true,
        trim: true
    },
    password: {
        type: 'string',
        required: true,
    }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;