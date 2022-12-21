const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");

const app = express();
dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// ROUTES
readdirSync("./routes").map((r) => app.use("/", require('./routes/' + r)));

// DATABASE

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
// })

const connect = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Error trying to connect to DB", err))
};

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}..`);
});