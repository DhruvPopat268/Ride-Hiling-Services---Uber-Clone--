const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    console.log(req.body)

    const isCaptainAlreadyExist = await captainModel.findOne({ email }).select('email')
    console.log(isCaptainAlreadyExist)

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "captain already exist" })
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });

}

module.exports.loginCaptain = async (req, res) => {
    const erros = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    const { email ,  password} = req.body;

    const captain = await captainModel.findOne({ email}).select('+-password')

    if (!captain){
        return res.status(400).json({ message: "invalid credentials" })
    }

    const isMatch = await captain.comparePassword(password)

    if(!isMatch){
        return res.status(400).json({ message: "Invalid Credentials" })
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token)

    res.status(200).json({token,captain})
}

module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {

    res.clearCookie('token')

    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]

    await blackListTokenModel.create({token:token})

    res.status(200).json({message:'Logout Successfully'})
}