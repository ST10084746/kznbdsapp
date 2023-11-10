const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const os = require("os")
dotenv.config();
const donationRouter = require("./routes/donationRoute");
const eventRouter = require("./routes/eventRoute");
const productRouter = require("./routes/productsRoute");
const userRouter = require("./routes/userRoute");
const apiKeyRouter = require("./routes/apiKeyRoute");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config");

const connectionString = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/`;



const PORT = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.enable("trust proxy")

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


app.use(express.json());

app.use("/donations", donationRouter);
app.use("/events", eventRouter);
app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/apikey",apiKeyRouter);

app.get("/test", (req, res)=>{

  
  console.log(`It works. Coming from ${os.hostname} `)
  res.json({status: "it works"})
})
// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});