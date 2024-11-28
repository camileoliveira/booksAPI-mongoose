const {
  addBook,
  listAllBooks,
  updateBook,
  findBookByTitle,
  findBookByAuthor,
  findBookByGenre,
  findBookByYear,
  removeBook,
} = require("../repository/bookRepository");

async function addBookService(title, author, genre, year) {
  return await addBook(title, author, genre, year);
}

async function listAllBooksService() {
  return await listAllBooks();
}

async function updateBookService(id, title, author, genre, year) {
  return await updateBook(id, title, author, genre, year);
}

async function findBookByTitleService(title) {
  return await findBookByTitle(title);
}

async function findBookByAuthorService(author) {
  return await findBookByAuthor(author);
}

async function findBookByGenreService(genre) {
  return await findBookByGenre(genre);
}

async function findBookByYearService(year) {
  return await findBookByYear(year);
}

async function removeBookService(id) {
  return await removeBook(id);
}
module.exports =
{
  addBookService,
  listAllBooksService,
  updateBookService,
  findBookByTitleService,
  findBookByAuthorService,
  findBookByGenreService,
  findBookByYearService,
  removeBookService};
