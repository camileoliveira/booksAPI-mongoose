const {
  addBookService,
  listAllBooksService,
  updateBookService,
  findBookByTitleService,
  findBookByAuthorService,
  findBookByGenreService,
  findBookByYearService,
  removeBookService,
} = require("../service/bookService");

async function addBookHandler(req, res) {
  const { title, author, genre, year } = req.body;
  const newBook = await addBookService(title, author, genre, year);
  return res.status(200).send(newBook);
}

async function listAllBooksHandler(req, res) {
  const books = await listAllBooksService();
  return res.status(200).send(books);
}

async function updateBookHandler(req, res) {
  const { id } = req.params;
  const { title, author, genre, year } = req.body;
  const updateBook = await updateBookService(title, author, genre, year);
  return res.status(200).send(updateBook);
}

async function findBookHandler(req, res) {
  const { title, author, genre, year } = req.query;

  if (title) {
    const book = await findBookByTitleService(title);
    return res.status(200).send(book);
  }

  if (author) {
    const book = await findBookByAuthorService(author);
    return res.status(200).send(book);
  }

  if (genre) {
    const book = await findBookByGenreService(genre);
    return res.status(200).send(book);
  }

  if (year) {
    const book = await findBookByYearService(year);
    return res.status(200).send(book);
  }
}

async function removeBookHandler(req, res) {
  const { id } = req.params;
  const removeBook = await removeBookService(id);

  if (removeBook) {
    return res.status(200).send("Book removed");
  }
  return res.status(404).send("Book not found");
}

module.exports = {
  addBookHandler,
  listAllBooksHandler,
  updateBookHandler,
  findBookHandler,
  removeBookHandler
};
