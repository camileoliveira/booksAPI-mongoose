const express = require("express");
const router = express.Router();

const {
  addBookHandler,
  listAllBooksHandler,
  updateBookHandler,
  findBookHandler,
  removeBookHandler,
} = require("../controller/bookController");

router.post("/book", addBookHandler);
router.get("/book", listAllBooksHandler);
router.get("/book/search", findBookHandler);
router.put("/book/:id", updateBookHandler);
router.delete("/book/:id", removeBookHandler);

module.exports = router;
