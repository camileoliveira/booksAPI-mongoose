const Book = require("../schema/bookSchema");

async function addBook(title, author, genre, year) {
  try {
    const newBook = new Book({ title, author, genre, year });
    return await newBook.save();
  } catch (err) {
    console.log(err.message);
  }
}

async function listAllBooks() {
  try {
    return await Book.find();
  } catch (err) {
    console.log(err.message);
  }
}

async function updateBook(id, title, author, genre, year) {
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, year },
      { new: true, runValidators: true }
    );
    return book;
  } catch (err) {
    console.log(err.message);
  }
}

async function findBookByTitle(title) {
  try {
    const book = await Book.findOne({ title });
    if (book) {
      return book;
    } else {
      console.log("Book not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function findBookByAuthor(author) {
  try {
    const book = await Book.findOne({ author });
    if (book) {
      return book;
    } else {
      console.log("book not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function findBookByGenre(genre) {
  try {
    const book = await Book.findOne({ genre });
    if (book) {
      return book;
    } else {
      console.log("book not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function findBookByYear(year) {
  try {
    const book = await Book.findOne({ year });
    if (book) {
      return book;
    } else {
      console.log("book not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function removeBook(id) {
  try {
    return await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  addBook,
  listAllBooks,
  updateBook,
  findBookByTitle,
  findBookByAuthor,
  findBookByGenre,
  findBookByYear,
  removeBook,
};
