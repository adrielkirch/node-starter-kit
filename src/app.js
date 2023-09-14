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

async function server() {
  try {
    const dbName = process.env.ENV;
    const mongoUrl = process.env.DATABASE_URL + dbName;

    await mongoDbSingleton.connect(mongoUrl);
    console.log('Connected to MongoDB');
    const port = process.env.PORT;
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error(`Failed to connect to MongoDB, ${err}`);
  }
}

server();
