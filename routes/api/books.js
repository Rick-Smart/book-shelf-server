const router = require("express").Router();
const bookController = require("../../controllers/bookController");

<<<<<<< HEAD
// Matches with "api/books"
router.route("/")
.get(bookController.findAll)
.post(bookController.create);
=======
// Matches with "/api/books"
router.route("/").get(bookController.findAll).post(bookController.create);
>>>>>>> f422448a035da4975cb96990b8ae2a3b9ee77801

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(bookController.deleteOne)
  .patch(bookController.checkOut);

// Matches with "/api/books/studentbooks"
router.route("/studentbooks").post(bookController.findManyByID);

module.exports = router;
