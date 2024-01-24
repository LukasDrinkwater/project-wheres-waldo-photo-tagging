const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const CharacterModel = require("../models/characters");

async function initialiseMongoServer() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  mongoose.connect(mongoUri);

  mongoose.connection.on("error", (e) => {
    if (e.message.code === "ETIMEDOUT") {
      console.log(e);
      mongoose.connect(mongoUri);
    }
    console.log(e);
  });

  mongoose.connection.once("open", () => {
    console.log(`MongoDB successfully connected to ${mongoUri}`);
  });

  await prefillData();
}

const prefillData = async () => {
  // character string
  // found bool
  // pixelX number
  // pixelY number
  await CharacterModel.create({
    character: "Waldo",
    found: false,
    pixelX: 440,
    pixelY: 483,
  });
};

// const UserModel = require("./models/user"); // Replace with your actual model
// await UserModel.create({ username: "testuser", password: "testpassword" });
module.exorts = initialiseMongoServer;
