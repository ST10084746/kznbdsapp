const Donation = require("../models/donationModel");

exports.getAllDonations = async (req, res, next) =>{
    try{
        const donations = await Donation.find();

        res.status(200).json({
            
            status: "success",
            results: donations.length,
            data :{
                donations,
            },
        });

    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.getOneDonation = async (req, res, next)=>{

    try{
        const donation = await Donation.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data :{
                donation,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.createDonation = async (req, res, next)=>{

    try{
        const donation = await Donation.create(req.body);

        res.status(200).json({
            status: "success",
            data :{
                donation,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.updateDonation = async (req, res, next)=>{

    try{
        const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: "success",
            data :{
                donation,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.deletePost = async (req, res, next)=>{

    try{
        const donation = await Donation.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}