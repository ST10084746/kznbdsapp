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
    User.findOne({email: req.body.email})
    .then(user=>{
        if(!user)
        {
            return res.status(401).json({
                status: "Failure",
                message:"User Not Found"
            })
        }
        currentUser = user
        return bcrypt.compare(req.body.password, user.password)

    })
    .then(result=>{
        if(!result)
        {
            return res.status(401).json({
                status: "Aunthentication failutre",
                message: "Password incorrect"

            }); 
        }
        const token = jwt.sign({username:currentUser.email, userid: currentUser._id},
            'secret_this_should_be_longer_than_it_is',
            {expiresIn: '1h'});

        console.log(token)

        res.status(200).json({
            status: "success",
            message: "Logged in",
            token:token

        });
    })
    .catch(err=>{
        console.log(err)

    })

}