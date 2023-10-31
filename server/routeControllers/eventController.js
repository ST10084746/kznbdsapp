const Event = require("../models/eventModel");

exports.getAllEvents = async (req, res, next) =>{
    try{
        const events = await Event.find();

        res.status(200).json({
            status: "success",
            results: events.length,
            data :{
                events,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.getOneEvent = async (req, res, next)=>{

    try{
        const event = await Event.findById(req.params.id);

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
    }

}

exports.createEvent = async (req, res, next)=>{

    try{
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
    }

}

exports.updateEvent = async (req, res, next)=>{

    try{
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

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
    }

}

exports.deleteEvent = async (req, res, next)=>{

    try{
        const event = await Event.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}