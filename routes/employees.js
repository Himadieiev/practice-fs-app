const express = require("express");

const { auth } = require("../middleware/auth");
const {
  all,
  add,
  employee,
  remove,
  edit,
} = require("../controllers/employees");

const router = express.Router();

// /api/employees
router.get("/", auth, all);

// /api/employees/:id
router.get("/:id", auth, employee);

// /api/employees/add
router.post("/add", auth, add);

// /api/employees/remove/:id
router.post("/remove/:id", auth, remove);

// /api/employees/edit/:id
router.put("/edit/:id", auth, edit);

module.exports = router;
