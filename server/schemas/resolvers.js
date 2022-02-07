const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Category, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    posts: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Post.find(params)
        .populate("user")
        .populate("category")
        .populate({ path: "comments", populate: "userId" });
    },
    post: async (parent, { _id }) => {
      return await Post.findById(_id)
        .populate("category")
        .populate("user")
        .exec();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById({ _id: context.user._id })
          .populate("posts")
          .populate({ path: "posts", populate: "category" });
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    newPost: async (parent, args, context) => {
      if (context.user) {
        const newPost = await Post.create(args);
        const getUser = await User.findOneAndUpdate(
          { _id: args.user },
          { $push: { posts: newPost._id } }
        );
        return newPost;
      }
      throw new AuthenticationError("Not logged in");
    },
    updatePost: async (
      parent,
      { _id, title, description, image, age, category, location },
      context
    ) => {
      if (context.user) {
        return await Post.findByIdAndUpdate(
          { _id: _id },
          { title, description, image, age, category, location },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("Not logged in");
    },
    deletePost: async (parent, { _id }, context) => {
      if (context.user) {
        return await Post.findOneAndDelete({ _id: _id });
      }
      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, args, context) => {
      if (context.user) {
        const newComment = await Post.findOneAndUpdate(
          { _id: args.postId },
          { $addToSet: { comments: args } },
          {
            new: true,
            runValidators: true,
          }
        );
        return newComment;
      }
      throw new AuthenticationError("Not logged in");
    },
    deleteComment: async (parent, args, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: args.postId },
          {
            $pull: {
              comments: {
                _id: args._id,
                userId: context.user._id,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateComment: async (parent, { postId, _id, comment }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId, "comments._id": _id },
          {
            $set: { "comments.$.comment": comment },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
