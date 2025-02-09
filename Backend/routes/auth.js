const express = require('express');
const router=express.Router();
const {Schema,model}=require('mongoose');
const User=require('../models/User');


//

router.get('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send('Hello World');
})

module.exports=router;