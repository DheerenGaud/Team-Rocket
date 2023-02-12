const express=require("express")
const content =require("../controller/dataController")


const Router=express.Router();

Router.get("/",content.getdata)
Router.post("/vedios",content.getVedios)


module.exports =Router;