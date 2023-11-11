const Product = require("../models/ProductModel");

exports.getAllProducts = async (req, res, next) =>{
    try{
        const products = await Product.find();

        res.status(200).json({
            status: "ok",
            results: products.length,
            products : products,
            
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.getOneProduct = async (req, res, next)=>{

    try{
        const product = await Product.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data :{
                product,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.createProduct = async (req, res, next)=>{

    try{
        const product = await Product.create(req.body);

        res.status(200).json({
            status: "ok",
            data :{
                product,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.updateProduct = async (req, res, next)=>{

    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: "ok",
            data :{
                product,
            },
        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}

exports.deleteProduct = async (req, res, next)=>{

    try{
        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "ok",

        });
    } catch(e){
        res.status(400).json({
            status: "fail",
        });
    }

}