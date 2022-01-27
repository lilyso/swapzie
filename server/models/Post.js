const mongoose = require("mongoose");
const { Schema } = mongoose;
const { commentSchema } = require("./Comment.js");
const { categorySchema } = require("./Category");
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: { categorySchema },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  dateCreated: {
    type: Date,
    default: Date.Now,
  },
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post, postSchema };
