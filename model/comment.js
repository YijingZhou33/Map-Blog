const mongoose = require('mongoose');

const commentShcema = new mongoose.Schema({
    // description ID
    aid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    // user ID
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    time: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    }
});

const Comment = mongoose.model('Comment', commentShcema);

module.exports = { Comment };