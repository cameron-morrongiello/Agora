const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    author: {type: String, required: true},
    message: {type: String, required: true},
    mediaID: {type: String, required: true},
    comments: [String],
    upvotes: {type: Int, required: true}
});

module.exports = mongoose.model('POSTS', postSchema);
