const mongoose=require('mongoose')
//data base coonection require
require('../Config/dbconfig');
require('../Database/schema/admin')
// model require
var async = require("async");
const admin=mongoose.model('Admin');
var authentication=require('../Middleware/authGenerate');
module.exports.Admin=(req,res)=>{
    console.log("req,res");
    try{
        console.log("req,res",req.body);
      async.series({
         Admin:function(callback){
          const AdminData={
              admin_id:req.body.email,
              password:req.body.password,
          }
          console.log("AdminData",AdminData)
          new admin(AdminData).save().then((data)=>{
              if(data){
                  console.log("hello admin",data);
                  var adminData={
                      id:data._id,
                      admin_id:data.admin_id
                  }
                  // res.send({result:data,message:'admin data find'})
                  var token = authentication.generateToken(data._id)
                //   var token = jwt.sign({ id: data._id }, _config.JWT_TOKEN_SECRET, {
                //       expiresIn: 86400 // expires in 24 hours
                //   });
                  console.log("tokennnnnnnnnnnnn",token)
                  res.status(200).send({ auth: true, token: token,message:'admin data find',result:adminData});
                  
              }
              else{
                  console.log("somthing error");
                  res.send({message:'somthing error to send data'})
              }
          })
         } 
      })
    }catch{
      res.send({message:'somthing error to commming data'})
    }
  }