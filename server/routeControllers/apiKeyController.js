const ApiKey = require("../models/apiKeyModel");

const genKey = () => {
    //create a base-36 string that is always 30 chars long a-z0-9
    // 'an0qrr5i9u0q4km27hv2hue3ywx3uu'
    return [...Array(30)]
      .map((e) => ((Math.random() * 36) | 0).toString(36))
      .join('');
  };

exports.getAllKeys = async (req, res, next) =>{
    try{
        const apiKeys = await ApiKey.find();

        res.status(200).json({
            status: "success",
            results: apiKeys.length,
            data :{
                apiKeys,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.getOneApiKey = async (req, res, next)=>{

    try{
        const apiKey = await ApiKey.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data :{
                apiKey,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.createApiKey = async (req, res, next)=>{

    try{
        const apiKey = await ApiKey.create({name: req.body.name, apikey: genKey()});

        res.status(200).json({
            status: "success",
            data :{
                apiKey,
            },
        });
    } catch(e){
        console.log(e)
        res.status(400).json({
            status: "fail",
        });
    }

}



exports.deleteApiKey = async (req, res, next)=>{

    try{
        const apiKey = await ApiKey.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}