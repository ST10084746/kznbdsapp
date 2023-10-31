const  mongoose = require("mongoose");

const eventSchema = mongoose.Schema({

    eventName : {type: String, required:true},
    date : {type: Date, required:true},
    image : {type: String, required:true},
    description : {type: String, required:true},

    }
)
const Event = mongoose.model('Event', eventSchema)

module.exports = Event