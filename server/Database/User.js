const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: String,
    email: String,
    phone: String,
    dob: String,
    userID: String,
    userName: String,
    results: [{ type: mongoose.Schema.ObjectId, ref: 'Result' }],
    subscription: { type: Boolean, default: false },
    lastSubscriptionDate: Date
}, { timestamps: true })

const USER = mongoose.model('User', user_schema)

module.exports = { USER }