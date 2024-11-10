import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{
        type:String,
        required:true,
        minLength:[8,"password must be of 8 characters"]
    },
    CleanPassword:{
        type:String,
        required:true
    },
    Skills:[],
    role:{type:String,required:true,
        enum:["serviceGiver","serviceProvider"]
    }
},{timestamps:true})

// Create a compound unique index on email and role
userSchema.index({ email: 1, role: 1 }, { unique: true });
const User=mongoose.model('user',userSchema);
export default User;