const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: String,
    body: String,
    genre: String,
    author: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Post = model('post', postSchema);

module.exports = Post;