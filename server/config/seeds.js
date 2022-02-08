const db = require("./connection");
const { Category } = require("../models");

db.once("open", async () => {
  try {
    await Category.deleteMany({});

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
      { name: "Cars & Vehicles" },
      { name: "Miscellaneous" },
    ]);

    console.log("categories seeded");

    process.exit();
  } catch (err) {
    console.log(err);
  }
});
