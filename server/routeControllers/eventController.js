const Event = require("../models/eventModel");
const upload = require("../middleware/imageUpload");

exports.getAllEvents = async (req, res, next) =>{
    try{
        const events = await Event.find();

        res.status(200).json({
            status: "ok",
            results: events.length,
            events : events,
        
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
            status: "ok",
            event : event
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.createEvent = async (req, res, next)=>{
    try{
        upload(req, res, (err)=>{
                const event =  Event.create({
                    title: req.body.title,
                    description: req.body.description,
                    image: req.body.image,
                    date: req.body.date
                });

                res.status(200).json({
                    status: "ok",
                    data :{
                        event,
                    },
                });
    
            
        })
    }catch(e){
    res.status(400).json({
        status: "fail",
    });}

   

    

}

exports.updateEvent = async (req, res, next)=>{

    try{
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: "ok",
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
            status: "ok",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}