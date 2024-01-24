const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// character string
// found bool
// pixelX number
// pixelY number

const CharacterSchema = new Schema({
  character: { type: String, required: true },
  found: { type: Boolean, required: true },
  pixelX: { type: Number, required: true },
  pixelY: { type: Number, required: true },
});

module.exports = mongoose.model("Character", CharacterSchema);
