// index is the module to test
// index is the router
const index = require("./index");

const request = require("supertest");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Import function to initialise the testing mongoDB server
const initialiseMongoServer = require("./mongoConfigTesting");

// Call it to initialise the testing mongoDB server before tests
beforeAll(async () => {
  await initialiseMongoServer();
});

afterAll(async () => {
  // Disconnect mongoose after all the tests are done
  await mongoose.disconnect();
});

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

// The actual tests
test("index route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "frodo" })
    .expect(200, done);
});
