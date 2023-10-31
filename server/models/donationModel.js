const  mongoose = require("mongoose");

const donationSchema = mongoose.Schema({

    donorName : {type: String, required:true},
    date : {type: Date, required:true},
    amount : {type: String, required:true}
    }
)
const Donation = mongoose.model('Donation', donationSchema)

module.exports = Donation