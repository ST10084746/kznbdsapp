const  mongoose = require("mongoose");

const apiKeySchema = mongoose.Schema({

    name : {type: String, required:true},
    apikey : {type: String, required:true}
    }
)
const ApiKey = mongoose.model('ApiKeySchema', apiKeySchema)

module.exports = ApiKey