


const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRouter = require( __dirname + "/../../src/routes/userRoute");
const mongoDbSingleton = require(__dirname + "/../../src/singletons/mongoDbSingleton");
//Router
app.use(express.json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello, to the app!");
});

//StartServer
async function startServer() {
  try {
    //Mongo Connection
    await mongoDbSingleton.getInstance();
    const port = process.env.PORT
    //App listening on port ...
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to Start node server', err);
  }
}

startServer();