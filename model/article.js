const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 100,
        minlength: 4,
        required: [true, 'Please enter the title']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please enter the author']
    },
    publishDate: {
        type: Date,
        default: Date.now

    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = {
    Article
};