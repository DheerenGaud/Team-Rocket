const express=require("express")
const user =require("../controller/userController")
const multer=require("multer")

const Router=express.Router();

//for profile pic
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/profilePic')
    },
    filename: function (req, file, cb) {
    
      cb(null, Date.now() + '_' + file.originalname)
    }
  })

const upload = multer({ storage: storage })


Router.post("/add", upload.single('profilePic'), user.adduser)
Router.post("/find",user.finduser);
Router.post("/findById",user.findUserByID);

module.exports =Router;