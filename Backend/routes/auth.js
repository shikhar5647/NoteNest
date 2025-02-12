const express = require('express');
const router = express.Router();
const {Schema,model} = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {body,validationResult} = require('express-validator');

// Create a new user using : POST "/api/auth/createuser". No login required
router.post('/createuser', [
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
    try{
        // check whether the user with email already exits
        let user = await User.findOne({email: req.body.email});
        console.log(user);
        if(user){
            return res.status(400).json({error: "Sorry a user with this email already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password,10);
        // create a new user
        user= await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        res.json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error due to ");
    }
});

module.exports = router;
