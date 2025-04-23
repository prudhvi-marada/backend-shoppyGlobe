import  mongoose from 'mongoose';
// userSchema to store user data in database
const userSchema=new mongoose.Schema({
    name:{ 
        type:String,     
        required:true
    },
    email:
    { 
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const user=mongoose.model('user',userSchema);
export default user;
