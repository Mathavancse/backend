const express = require("express")
const app  = express()
const  connectDB = require("./config/db")
require("dotenv").config()
const router = require("./routes/index")
const cors = require("cors")

connectDB()
app.use(cors({
  origin: "http://localhost:5173",  // Replace with your React app's origin
  // origin: "http://localhost:5174",  // Replace with your React app's origin
  credentials: true                // Allow cookies/authorization headers
}));
app.use(express.json())

app.use("/api",router)




app.listen((process.env.PORT),()=>{
    console.log(`server running in port ${process.env.PORT}`);
    
})