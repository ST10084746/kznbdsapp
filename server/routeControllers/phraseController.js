const Phrase = require("../models/phraseModel");
const upload = require("../middleware/imageUpload");

exports.getAllPhrases = async (req, res, next) =>{
    try{
        const phrases = await Phrase.find();

        res.status(200).json({
            status: "ok",
            results: phrases.length,
            phrases : phrases,
        
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.getOnePhrase = async (req, res, next)=>{

    try{
        const phrase = await Phrase.findById(req.params.id);

        res.status(200).json({
            status: "ok",
            phrase : phrase
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.createPhrase = async (req, res, next)=>{
    try{
        upload(req, res, (err)=>{
                const phrase =  Phrase.create({
                    title: req.body.title,
                    image: req.body.image,
                    
                });

                res.status(200).json({
                    status: "ok",
                    data :{
                        phrase,
                    },
                });
    
            
        })
    }catch(e){
    res.status(400).json({
        status: "fail",
    });}

    /*try{
        const event = await Event.create(req.body);

        res.status(200).json({
            status: "success",
            data :{
                event,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }*/

    

}

exports.updatePhrase = async (req, res, next)=>{

    try{
        const phrase = await Phrase.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: "ok",
            data :{
                phrase,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.deletePhrase = async (req, res, next)=>{

    try{
        const phrase = await Phrase.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "ok",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}