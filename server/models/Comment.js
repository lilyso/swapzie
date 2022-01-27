const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.Now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment, commentSchema };
