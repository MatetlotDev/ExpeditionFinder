const mongoose = require('mongoose');

const expeditions_finished_comments = mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    comment: String,
    answer: String
})

const expeditions_finished = mongoose.Schema({
    succeed: Boolean,
    title: String,
    insert_date: Date,
    lvl: String,
    expl_lvl: [String],
    type: String,
    time: Number,
    pictures: [String],
    c2c_link: String,
    comments: [expeditions_finished_comments]
})

const expeditions_posted = mongoose.Schema({
    insert_date: Date,
    description: String,
    title: String,
    lvl: String,
    expl_lvl: [String],
    type: String,
    time: Number,
    peoples: Number,
    period: String,
    pictures: [String],
    c2c_link: String,
    location_lat: Number,
    location_long: Number,
})

const discussion_messages = mongoose.Schema({
    content: String,
    createdAt: Date
})

const discussions = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    details: expeditions_posted,
    messages: [discussion_messages]
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    image: String,
    birth: Date,
    nationality: String,
    languages: [String],
    sexe: String,
    insert_date: Date,
    global_lvl: String,
    rock_lvl: String,
    ice_lvl: Number,
    mountain_lvl: String,
    verified: Boolean,
    description: String,
    expeditions_finished: [expeditions_finished],
    expeditions_posted: [expeditions_posted],
    discussions: [discussions]
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);