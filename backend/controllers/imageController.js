const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const path = require("path");
const imageSize = require("image-size");

const Character = require("../models/characters");

// test
exports.test = asyncHandler(async (req, res, next) => {
  res.json({ message: "hey there" }).statusCode(200).send();
});

// GET specific image
exports.single_image_get = asyncHandler(async (req, res, next) => {
  const imageToGet = req.params.imageName;
  const imageUrl = `http://localhost:3000/${path.join("images", imageToGet)}`;

  const imagePath = path.join(__dirname, "../public/images", imageToGet);
  const dimensions = imageSize(imagePath);
  console.log(dimensions);
  res.json({ imageUrl, dimensions }).sendStatus(200);
});

// POST character guess
exports.character_guess_post = asyncHandler(async (req, res, next) => {
  // get info from request
  const imageToGet = req.params.imageName;
  const character = req.body.character;
  const pixelXPercentGuess = req.body.pixelX;
  const pixelYPercentGuess = req.body.pixelY;

  // get character from DB
  const dbCharacter = await Character.find({ character: character }).exec();

  // get size of original image
  const imagePath = path.join(__dirname, "../public/images", imageToGet);
  const dimensions = imageSize(imagePath);

  // work out if its a match.
  const pixelXGuess = Math.round((pixelXPercentGuess / 100) * dimensions.width);
  const pixelYGuess = Math.round(
    (pixelYPercentGuess / 100) * dimensions.height
  );

  // console.log(imageToGet, character, pixelXGuess, pixelYGuess);
  console.log(pixelXGuess, pixelYGuess);
  res.sendStatus(200);
});

// To illustrate, let's say your image's original dimensions are 2000px
// by 2000px. When the div's height is 1000px, the image's height becomes
//  1000px (since it scales to the div's height). If you position a character
//   at 10%/67%, this would translate to 100px (10%) and 670px (67%).

// When the div' s height increases to 1500px, the image's height becomes
// 1500px, and the character's position would adjust to 10% of 1500px (which is 150px).

// As you can see, the percentage values stay the same despite the change in pixel values.
