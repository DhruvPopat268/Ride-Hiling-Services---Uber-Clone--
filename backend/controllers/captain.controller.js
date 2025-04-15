const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname,lastname, email, password , color ,plate , capacity , vehicleType } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email }).select('email')
    console.log(isCaptainAlreadyExist)

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "captain already exist" })
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: firstname,
        lastname: lastname,
        email,
        password: hashedPassword,
        color:color,
        plate: plate,
        capacity: capacity,
        vehicleType:vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });

}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { email , password} = req.body;
    
    const captain = await captainModel.findOne({ email}).select('+password')

    if (!captain){
        return res.status(400).json({ message: "invalid credentials" })
    }

    const isMatch = await captain.comparepassword(password)

    if(!isMatch){
        return res.status(400).json({ message: "Invalid Credentials" })
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token)

    res.status(201).json({token,captain})
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json(req.captain)
}

module.exports.logoutCaptain = async (req, res, next) => {

    res.clearCookie('token')

    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]

    await blackListTokenModel.create({token:token})

    res.status(200).json({message:'Logout Successfully'})
}