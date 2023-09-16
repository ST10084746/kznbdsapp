const mongoose = require('mongoose')

const donationSchema = new mongoose.Schema({
    receipt: String,
    name: String,
    address: String,
    nature:String,
    idtype:String,
    country:String,
    regno: String,
    taxref:Number,
    contact:String,
    email: String,
    tradingname:String,
    amount: Number,
    date: Date
})