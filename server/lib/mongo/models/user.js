const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  userName: String,
  email: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const User = model('user', userSchema);

module.exports = User;