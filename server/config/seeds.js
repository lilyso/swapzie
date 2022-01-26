const db = require("./connection");
const { User, Post, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Soft Toys" },
    { name: "Educational" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Puzzles" },
    { name: "Construction" },
    { name: "Dolls" },
    { name: "Action Figures" },
    { name: "Pretend Play" },
  ]);

  console.log("categories seeded");

  await Post.deleteMany();

  const posts = await Post.insertMany([{}]);

  console.log("posts seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Lily",
    lastName: "So",
    email: "lily@testmail.com",
    password: "password12345",
    posts: [{}],
  });

  await User.create({
    firstName: "Nick",
    lastName: "La",
    email: "nick@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
