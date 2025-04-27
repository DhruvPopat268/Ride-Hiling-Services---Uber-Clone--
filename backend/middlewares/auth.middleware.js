const userModel=require('../models/user.model')
const captainModel = require('../models/captain.model')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const blackListedModel = require('../models/blackListToken.model')

module.exports.authUser=async (req,res,next)=>{
    
    const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]
    console.log(token)

    if(!token){
        return res.status(401).json({message:'unauthorized 1'})
    }

    const isBlacklisted = await  blackListedModel.findOne({token:token})
    
    if(isBlacklisted){
        return res.status(401).json({message:'access restricted'})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
 
        req.user = user;

        res.status(201).json({message:"authorized"})

        return next();
    } 
    catch (err){
        return res.status(401).json({message:'unauthorized 2'})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    
    const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]

    if(!token){
        return res.status(401).json({message:'unauthorized'})
    }

    const isBlacklisted = await  blackListedModel.findOne({token:token})
    
    if(isBlacklisted){
        return res.status(401).json({message:'access restricted'})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
 
        req.captain = captain;

        return next();
    } 
    catch (err){
        return res.status(401).json({message:'unauthorized'})
    }
}

