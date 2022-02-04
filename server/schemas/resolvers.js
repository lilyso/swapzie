const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Category } = require("../models");
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

      return await Post.find(params).populate("user").populate("category");
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
    newPost: async (parent, args) => {
      console.log(args);
      const newPost = await Post.create(args);
      const getUser = await User.findOneAndUpdate(
        { _id: args.user },
        { $push: { posts: newPost._id } }
      );
      console.log("newpost", newPost);
      return newPost;
    }, // add authentification error
    updatePost: async (parent, {}) => {
      return await Post.findByIdAndUpdate(_id, args, { new: true });
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
  },
};
//addComment
//updateComment
module.exports = resolvers;
