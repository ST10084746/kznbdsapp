const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectionString = process.env.ATLAS_URI;

const donationRouter = require("./routes/donationRoute");
const eventRouter = require("./routes/eventRoute");
const productRouter = require("./routes/productsRoute");

const PORT = process.env.PORT || 5050;
const app = express();

const connectWithRetry = ()=>{
  mongoose.connect(connectionString, {
    useNewUrlParser:true,
  })
  .then(()=> console.log("Successfully Connected to DB"))
  .catch((e)=>{
    console.log(e);
    setTimeout(connectWithRetry,5000);
  });
};

connectWithRetry();

app.use(cors());
app.use(express.json());

app.use("/donations", donationRouter);
app.use("/events", eventRouter);
app.use("/products", productRouter);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});