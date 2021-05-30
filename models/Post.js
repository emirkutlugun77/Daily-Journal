const mongoose = require('mongoose');

const postSchema = mongoose.Schema({ dateTime: { type: Date, default: Date.now }, title: String, content: String });

module.exports = mongoose.model('Post', postSchema);