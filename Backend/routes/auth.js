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
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    res.send(req.body);
})

module.exports=router;