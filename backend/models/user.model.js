const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname :{
            type:String,
            required:true,
            minlenght:[2,'First name must be at least of 2 characters long'],
        },

        lastname :{
            type:String,
            minlenght:[2,'Last name must be at least of 2 characters long'],
        },

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlenght:[6,'Email must be at least of 6 characters long'],
    },
    password:{
        type:String,
        required:true,
        select:false,  //?
        // minlenght:[6,'Password must be at least of 6 characters long'], //jwt
    },
        socketID:{
            type:String,
    },
})

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user',userSchema)
module.exports = userModel
