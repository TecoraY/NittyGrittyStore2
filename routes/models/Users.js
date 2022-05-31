const mongoose=require('mongoose');

//name, email, password- email must be unique to prevent duplicate accounts
const UserSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});
console.log('user');
module.exports= User=mongoose.model('user', UserSchema);