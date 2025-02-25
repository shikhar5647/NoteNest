const router = require('express').Router();

const mongoose = require('mongoose');
const Users = require('../models/User');

const bcrypt = require('bcryptjs');
const {body,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Shikharisagoodb$oy';

// Route 1 Create a new user using : POST "/api/auth/createuser". No login required
 [
     body('name','Enter a valid name').isLength({min:3}),
     body('email','Enter a valid email').isEmail(),
     body('password','Password must be atleast 5 characters').isLength({min:5}),
 ],
router.post('/createuser', async (req,res) => {
    // if there are errors , return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        // check whether the user with email already exits
        const user = await Users.findOne({email: req.body.email});
        console.log(user);
        if(user){
            return res.status(400).json({error: "This email is already in use, try logging in"});
        }

        // Start user creation

        // Password encryption
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password,10);

        const newUser = await Users.insertMany([
            {
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                date: Date.now()
            }
        ]);
        console.log(newUser);
        jwt.sign({user:newUser.id},JWT_SECRET);
        res.status(200).json({success:true});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error due to ");
    }
});

// Route 2 : Authenticate a User using : POST "/api/auth/login". No login required
router.post('/login', [
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        const payload = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(payload,JWT_SECRET);
        res.json({authToken});
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
)

// Route 3 : Get loggedin User Details using : POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req,res) => {
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(
            user
        );
        console.log(user);
        console.log(userId);
        console.log(req.user);
        console.log(req.user.id);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
