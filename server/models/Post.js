const mongoose = require("mongoose");
const { Schema } = mongoose;
const { commentSchema } = require("./Comment.js");
const { Category, categorySchema } = require("./Category.js");
const postSchema = new Schema(
  {
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
    age: {
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
    claimedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [commentSchema],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post, postSchema };
