const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req,res) =>{
    try {
        console.log("REQQ",req.body);
        const { firstName, lastName, email, mobileNum, password } = req.body;
        const userExist = await userModel.findOne({email : req.body.email});
        if(userExist){
            res.json({message: "Email Already Exist", status : false});
        }
        else{
            const hashpassword = await bcrypt.hash(req.body.password,10);
            const newUser = await userModel.create({
                firstName, lastName, email, mobileNum, password : hashpassword
            });
            delete newUser.password;
            res.json({message: "User Created Successfully", status : true, data : newUser});
        }
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req,res) =>{
    try {
        const { email,password } = req.body;
        const userExist = await userModel.findOne({email : req.body.email});
        if(!userExist){
            res.json({message: "User not Exist", status : false});
        }
        else {
            bcrypt.compare(req.body.password , userExist.password,(err, result)=>{
                if(result){
                    const obj = { "id" :  userExist._id, "name" : userExist.firstName + userExist.lastName, "email" : userExist.email};
                    res.json({message: "Login Successfully", status : true, data : obj});
                }
                else{
                    res.json({message: "Incorrect username & password.", status : false});
                }
            })
        }
    } catch (error) {
        console.log(error); 
    }
}

module.exports = { registerUser, loginUser};