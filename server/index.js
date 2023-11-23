const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)

//CRUD in node
//Create => post | Read => get | Update => put | Delete => delete
app.get("/", (req, res) => {
  //req: get data from front-end
  //res: send data to front-end
  res.send("welcome i send message to my client")
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  //req: get data from front-end
  //res: send data to front-end
  console.log(`Server Running on port ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoBD connected established"))
  .catch((error) => console.log("mongoBD connected fail :", error.message));
