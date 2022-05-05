const mongoose = require('mongoose');
const validator = require('validator');

const StudSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email ID already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Address")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        // max:10,
        required:true
    },
    address:{
        type:String,
        required:true
    }
}) 
 
const Student = new mongoose.model("Student", StudSchema);

module.exports = Student;