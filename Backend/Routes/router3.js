const express=require("express")
const collage =require("../controller/principleController")
const multer=require("multer")

const Router=express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/profilePic')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
  })

const upload = multer({ storage: storage })
const multipleImg =upload.fields([{name:"image_1"},{name:"image_2"},{name:"image_3"},{name:"image_4"},{name:"image_5"},{name:"image_6"}])

Router.post("/add",upload.single('logo') ,collage.newCollage)
Router.post("/find",collage.findCollage);
Router.post("/addTeacher",collage.addTeacher);
Router.post("/edit",multipleImg,collage.editCollage);
Router.post("/exist",upload.single('profilePic') ,collage.teacherExist);
Router.post("/addMore",upload.single('profilePic') ,collage.addMoreTeacherData);
Router.post("/findteacher",collage.findteacher);
Router.post("/getTeacher",collage.getTeacher);

module.exports =Router;