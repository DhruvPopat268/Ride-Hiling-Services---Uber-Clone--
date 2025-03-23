const mongoose = require('mongoose')

const blackListTOken = new mongoose.Schema({ 
    token:{
         type: String, 
         required: true,
         unique:true
    },
    createAt:{ 
        type: Date, 
        default: Date.now(),
        expires:86400
    }
 })

 module.exports = mongoose.model('blackListToken', blackListTOken)
