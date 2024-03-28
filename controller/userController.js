const userModel = require("../model/userModel");

const getAllUser = async (req,res) =>{
    try {
        const userData = await userModel.find({isDeleted : false}).select("-password");
        if(userData){
            res.json({message:"Get Successfully", status : true, data : userData});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const getSingleUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const userdata = await userModel.find({_id :id,isDeleted :  false}).select("-password");
        if(userdata){
            res.json({message : "User Found",data : userdata, status : true});
        }
        else{
            res.json({message : "User Not found",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const updateUser = await userModel.findByIdAndUpdate(id,{$set: req.body},{new : true});
        res.json({message : "User Updated successfully", status : true, data: updateUser});
    } catch (error) {
        console.log(error); 
        res.json({message : "User Not Updated", status : false})
    }
}

const deleteUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const deletedUser = await userModel.findByIdAndUpdate(id,{$set : {isDeleted : true}});
        if(deletedUser){
            res.json({message : "User Deleted successfully", status : true});
        }
        else{
            res.json({message : "Something went wrong",status : false});
        }
        
    } catch (error) {
        console.log(error);

    }
}

module.exports = { getAllUser,getSingleUser,updateUser,deleteUser }