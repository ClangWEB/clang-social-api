const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const fileUpload = require("express-fileupload");

const app = express();
dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(fileUpload({
  useTempFiles: true,
}));

// ROUTES
readdirSync("./routes").map((r) => app.use("/", require('./routes/' + r)));

// DATABASE
mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}..`);
});