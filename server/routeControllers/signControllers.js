const Sign = require("../models/signModel");
const upload = require("../middleware/imageUpload");

exports.getAllSigns = async (req, res, next) =>{
    try{
        const signs = await Sign.find();

        res.status(200).json({
            status: "ok",
            results: signs.length,
            signs : signs,
        
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.getOneSign = async (req, res, next)=>{

    try{
        const sign = await Sign.findById(req.params.id);

        res.status(200).json({
            status: "ok",
            sign : sign
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.createSign = async (req, res, next)=>{
    try{
        upload(req, res, (err)=>{
                const sign =  Sign.create({
                    title: req.body.title,
                    image: req.body.image,
                    
                });

                res.status(200).json({
                    status: "ok",
                    data :{
                        sign,
                    },
                });
    
            
        })
    }catch(e){
    res.status(400).json({
        status: "fail",
    });}

    

    

}

exports.updateSign = async (req, res, next)=>{

    try{
        const sign = await Sign.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: "ok",
            data :{
                sign,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.deleteSign = async (req, res, next)=>{

    try{
        const sign = await Sign.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "ok",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}