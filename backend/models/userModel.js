const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
userSchema.statics.signup = async function(email, password) {

   //validation
   if(!email || !password){
    throw Error('All fields must be filled')
   }
   if(!validator.isEmail(email)){
    throw Error('Email is not valid')
   } 
   if(!validator.isStrongPassword(password)){
    throw Error('Create a strong password')
   }
   const exists = await this.findOne({ email })

   if(exists) {
    throw Error('Email already in use')
   }

   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password, salt)

   const user = await this.create({ email, password: hash })

   return user

}

//static logic method
userSchema.statics.login = async function(email, password) {
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })

    if(!user) {
      throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Invalid password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)

//bcrypt is a hashing function, that can hash our password in a secure way. That means our password is safe in database. It provides extra security suppose two users are using same password then it will add a # to it for create difference from the previous one.