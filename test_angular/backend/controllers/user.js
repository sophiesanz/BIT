'use strict'
var User = require('../models/user');

function test_user(req,res){
    res.status(200).send({
        message : "controller user is working"
    })
}

function createUser(req,res){
    var user = new User();
    var params = req.body;

    user.name = params.name;
    user.age = params.age;
    user.email = params.email;
    user.password = params.password;
    user.image = params.image;
    user.role = params.role;

    user.save()
    .then((userSaved)=>{
        if(!userSaved){
            res.status(404).send({message:"User hasn't been logged"});
        }else{
            res.status(200).send({user:userSaved, message:"User logged successfully"});
        }
    }).catch(error =>{
        res.status(500).send({message:'Error to save the user'});
    })
}



function updateUser(req,res){
    var idUser = req.params.id;
    var newData = req.body;
    
    User.findByIdAndUpdate(idUser,newData).exec()
    .then((userUpdated)=>{
        if (!userUpdated) {
            res.status(404).send({ message: "User hasn't been updated" });
        } else {
            res.status(200).send({ user: userUpdated, message: "User updated successfully" });
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error to update the user" });
    })
}

function deleteUser(req,res){
    var idUser = req.params.id;
    
    User.findByIdAndRemove(idUser).exec()
    .then((userDeleted)=>{
        if (!userDeleted) {
            res.status(404).send({ message: "User hasn't been deleted" });
        } else {
            res.status(200).send({ user:userDeleted, message: "User deleted successfully"  });
           
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error to delete the user" });
    })
    
}

module.exports = {
    test_user,
    createUser,
    updateUser,
    deleteUser
    
}
 

