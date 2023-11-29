const  mongoose = require("mongoose");


const signSchema = mongoose.Schema({

    title : {type: String, required:true},
    image : {type: String, required:true},
    
    
    

    }
)
const Sign = mongoose.model('Sign', signSchema)

module.exports = Sign