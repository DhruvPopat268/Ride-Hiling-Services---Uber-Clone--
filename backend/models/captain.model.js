const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastname: {
        type: String,
        validate: {
            validator: function (v) {
                return v.length === 0 || v.length >= 3; // Allow empty, or must be at least 3
            },
        },
        message:'Last name must be at least 3 characters long'
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    color: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
    },
    plate: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
    },
    capacity: {
        type: Number,
        required: true,
        minlength: [1, 'First name must be at least 1 characters long'],
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ['car', 'motorcycle', 'auto']
    },

    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}

captainSchema.methods.comparepassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;