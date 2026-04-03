const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

const {
  createRecord,
  getRecords,
  getSummary
} = require("../controllers/recordController");

router.post("/", auth, checkRole(["Admin"]), createRecord);
router.get("/", auth, checkRole(["Admin", "Analyst"]), getRecords);

router.get("/summary", auth, getSummary);

module.exports = router;