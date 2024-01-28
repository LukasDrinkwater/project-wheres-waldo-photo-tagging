const express = require("express");
const router = express.Router();

const imageController = require("../controllers/imageController");

// test
router.get("/test", imageController.test);

// GET all characters
router.get("/allCharacters", imageController.all_Characters_get);

// GET specific image
router.get("/:imageName", imageController.single_image_get);

// POST character guess
router.post("/:imageName/characterPick", imageController.character_guess_post);

module.exports = router;
