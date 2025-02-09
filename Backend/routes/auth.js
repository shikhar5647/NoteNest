const express = require('express');
const router=express.Router();
const {Schema,model}=require('mongoose');
const User=require('../models/User');
const {body,validationResult}=require('express-validator');


//

router.get('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
],
    (req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send('Hello World');
})

module.exports=router;