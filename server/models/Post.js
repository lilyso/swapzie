const mongoose = require("mongoose");
const { Schema } = mongoose;
const { commentSchema } = require("./Comment.js");
const { Category, categorySchema } = require("./Category.js");
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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  location: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  dateCreated: {
    type: Date,
    default: Date.Now,
    required: true,
  },
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post, postSchema };
