const  mongoose = require("mongoose");


const phraseSchema = mongoose.Schema({

    title : {type: String, required:true},
    image : {type: String, required:true},
    
    
    

    }
)
const Phrase = mongoose.model('Phrase', phraseSchema)

module.exports = Phrase