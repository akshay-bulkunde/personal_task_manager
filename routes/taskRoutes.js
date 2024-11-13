const express = require("express");
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewear/authMiddleware");

const router = express.Router();

router.get("/",authMiddleware, taskController.getTasks); 
router.get("/:id",authMiddleware, taskController.getTaskById); 
router.post("/", authMiddleware,taskController.createTask); 
router.put("/:id", authMiddleware,taskController.updateTask); 
router.delete("/:id", authMiddleware,taskController.deleteTask);

module.exports = router;
