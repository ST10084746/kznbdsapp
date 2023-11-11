const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async(req, res)=>{

    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        user.save()
            .then(result =>{
                res.status(201).json({
                    status: "ok",
                    message: 'User Created',
                    result: result
                })
         })
        .catch(err=>{
            res.status(500).json({
                err:err
            });
            console.log(err)
        });
        
    });

}

exports.login = async (req, res)=>{
    let currentUser;
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                status: 'failed',
                message: "User Not Found"
            })
        }
        currentUser = user;
        let isCorrect =  await bcrypt.compare(req.body.password, user.password)
        

        if(!isCorrect){
            res.status(401).json({
                status: "Authentication Failed"
            })
        }else{
            const token = jwt.sign({username:currentUser.email, userid: currentUser._id},
                'secret_this_should_be_longer_than_it_is',
                {expiresIn: '1h'});

            res.status(200).json({
                status: "ok",
                token: token
            })
            return res.status(204)
        }

    } catch(error){
        console.error("Login Error", error)
        res.status(500).json({
            status: "Login Failed"})
        res.send(token);

    }    


}