const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/userRoute");
const mongoDbSingleton = require("./singletons/mongoDbSingleton");
app.use(express.json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello, to the app!");
});
const mongoose = require("mongoose");

async function startServer() {
  try {
    await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    const port = 3000
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

startServer();
