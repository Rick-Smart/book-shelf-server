const router = require("express").Router();
const studentController = require("../../controllers/studentController");

// Matches with "/api/students"
router.route("/").get(studentController.findAll).post(studentController.create);

// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(studentController.findById)
  .delete(studentController.deleteOne)
  .put(studentController.updateBooks)
  .post(studentController.addBooks)
  .patch(studentController.checkOutBook);
module.exports = router;
