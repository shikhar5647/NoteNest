const express = require('express');
const router = express.Router();
const {Schema,model} = require('mongoose');
const User = require('../models/User');
const {body,validationResult} = require('express-validator');

router.post('/', [
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
],
async (req,res) => {
    // if there are errors , return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    // check whether the user with email already exits
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"});
    }
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    // .then(user => res.json(user))
    // .catch(err => {
    //     console.log(err);
    //     res.json({error:"Some error occured"});
    // })
});

module.exports = router;
