const mongoose = require("mongoose");
const { Schema } = mongoose;
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
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
