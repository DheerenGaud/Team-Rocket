const express=require("express")
const bodyparser=require("body-parser")
const cors=require("cors")
const  Connection  = require("./db/db")
const Router=require("./Routes/router")
const Router2=require("./Routes/router2")
const Router3=require("./Routes/router3")


const app=express();
Connection()

app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.use("/",Router)
app.use("/data",Router2)
app.use("/collage",Router3)

app.get("/",(req,res)=>{
    res.send("hellow")
})

app.listen(8000,()=>{
    console.log("Backend is listen on port 8000")
})