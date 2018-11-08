const mongoose = require('../db/connections')
const Idea = require('../models/Idea')

const Schema = mongoose.Schema

const User = new Schema({
	username: String,
	password: String,
    ideas: [
        {
            type: Schema.Types.ObjectId,
            ref: "Ideas"
        }
    ],
})


module.exports = mongoose.model('User', User)