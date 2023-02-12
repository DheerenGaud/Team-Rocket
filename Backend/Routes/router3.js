const express=require("express")
const collage =require("../controller/principleController")


const Router=express.Router();

Router.post("/add",collage.newCollage)


module.exports =Router;