const db = require("./connection");
const { User, Category } = require("../models");

db.once("open", async () => {
  try {
    await Category.deleteMany({});
    await User.deleteMany({});

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

    const users = await User.insertMany([
      {
        firstName: "Lily",
        lastName: "So",
        email: "lily@testmail.com",
        password: "password12345",
        posts: [
          {
            title: "Toy Kitchen",
            description:
              "Well-loved toy kitchen. Comes with toy kitchen accessories and food.",
            image: "",
            category: "Pretend Play",
          },
          {
            title: "Marvel action heroes",
            description:
              "Avengers actions heroes. Great condition. Small scratch on Spiderman.",
            image: "",
            category: "Action Figures",
          },
        ],
      },
      {
        firstName: "Sarah",
        lastName: "Head",
        email: "sarah@testmail.com",
        password: "password12345",
        posts: [
          {
            title: "Various baby books",
            description: "All in great condition and barely used",
            image: "",
            category: "Books",
          },
          {
            title: "Wooden puzzles for toddlers",
            description:
              "My 2yo loved these but she's grown out of them now. Good used condition and many more years to go.",
            image: "",
            category: "Puzzles",
          },
        ],
      },
      {
        firstName: "Breana",
        lastName: "Bee",
        email: "bre@testmail.com",
        password: "password12345",
        posts: {
          title: "100+ set of magnetic tiles",
          description:
            "Keep the kids busy with these magnetic tiles. A few scuffs but in good working condition",
          image: "",
          category: "Construction",
        },
      },
      {
        firstName: "Nick",
        lastName: "La",
        email: "nick@testmail.com",
        password: "password12345",
        posts: {
          title: "Set of Frozen dolls",
          description:
            "She got two sets for christmas so these have barely been played with.",
          image: "",
          category: "Dolls",
        },
      },
    ]);

    console.log("users seeded");

    process.exit();
  } catch (err) {
    console.log(err);
  }
});
