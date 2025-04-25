const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model')

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;
    console.log(req.body)

    const userexist = await userModel.findOne({ email }).select('email')

    if (userexist) {
        return res.status(401).json({ message: 'User is already exist' })
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    console.log(req.body)

    const user = await userModel.findOne({ email }).select('+password')
    console.log(user)

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = user.generateAuthToken();
    console.log(token, 'set cookie')

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None', // Only use true in production HTTPS
    });

    res.status(201).json({ token, user })
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {

    // res.clearCookie('token')

    // const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]

    // await blackListTokenModel.create({token:token})

    // res.status(200).json({message:'Logout Successfully'})

    try {
        // Clear the cookie
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'Lax',
            secure: false, // Only use true in production HTTPS

        });

        // Get the token from the cookie or authorization header
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (token) {
            // Blacklist the token (store it to prevent reuse)
            await blackListTokenModel.create({ token });

            return res.status(200).json({ message: 'Logout successfully' });

        } else {
            return res.status(400).json({ message: 'No token found' });
        }
    } catch (error) {
        console.error('Error during logout', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports.authenticateUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        const user = await userModel.findById(req.user._id).select('-password');
        res.json({ user });

    } catch (err) {
        res.status(401).json({ message: 'Invalid Token' });
    }
}