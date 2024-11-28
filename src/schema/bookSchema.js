const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },

  genre: {
    type: String,
    require: true,
  },

  year: {
    type: Number,
    require: true,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
