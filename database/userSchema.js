import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    email:String,
    password:String
})

const User=mongoose.models.USER || mongoose.model('USER',userSchema)

export default User;