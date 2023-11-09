const jwt = require('jsonwebtoken');


module.exports=(req, res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        //const token = req.headers['Authorization'];

        jwt.verify(token,"secret_this_should_be_longer_than_it_is")
        next();
    }
    catch(error){
        console.log(error)
        res.status(401).json({
            message:"Invalid Token"
        })
    }
}