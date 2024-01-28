const mongoose = require("mongoose");
const Characters = require("./models/characters");
require("dotenv").config();

const mongoDB = process.env.MONGODB_STRING;

// Connect to mongo db
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// waldo x 882 y 974
// wenda x 894 y 778
// wizzard x 1342 y 988
// odlaw x 1204 y 1222

// 60px height +/- 30px
// 20px width +/- 10px

// character string
// found bool
// pixelX number
// pixelY number

// Define the data to be inserted
const dataToInsert = [
  { character: "Waldo", found: false, pixelX: 882, pixelY: 974 },
  { character: "Wenda", found: false, pixelX: 894, pixelY: 778 },
  { character: "Wizzard", found: false, pixelX: 1342, pixelY: 988 },
  { character: "Odlaw", found: false, pixelX: 1202, pixelY: 1222 },
  // Add more documents as needed
];

// Function to insert data into the database
const populateDatabase = async () => {
  try {
    // Delete existing documents (optional)
    // await YourModel.deleteMany({});

    // Insert new documents
    await Characters.insertMany(dataToInsert);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
};

// Call the function to seed the database
populateDatabase();
