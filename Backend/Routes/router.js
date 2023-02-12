const express=require("express")
const user =require("../controller/userController")


const Router=express.Router();

Router.post("/add",user.adduser)
Router.post("/find",user.finduser);

module.exports =Router;