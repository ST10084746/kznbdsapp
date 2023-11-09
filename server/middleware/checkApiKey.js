const Key = require("../models/apiKeyModel")
module.exports = (req, res, next) => {
    //Where is the API key expected to be?
    //let host = req.headers.origin;
    //let api_key = req.query.api_key; //version 1 with the querystring
    //let api_key = req.params.apikey; //version 2 with the URL params
    let api_key = req.header('x-api-key'); //version 3 using a header
    //let account = Key.findOne({apiKey: api_key})
      
    // find() returns an object or undefined
   /* if (account) {
        next();
      
    } else {
      //stop and respond
      res.status(403).send({ error: { code: 403, message: 'Authentication Failed.' } });
    }*/

    let currentUser;
    console.log(api_key)
    Key.findOne({apikey:api_key})
    .then(user=>{
        if(!user)
        {
            return res.status(401).json({
                status: "Failure",
                message:"Not Authorized"
            })
        }
        currentUser = user
        next()

    })
    .catch(err=>{
        return res.status(401).json({
            message:"Authentication failure"
        });

    })
  };


 
