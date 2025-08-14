const express = require("express")
const app  = express()
const  connectDB = require("./config/db")
require("dotenv").config()
const router = require("./routes/index")
const cors = require("cors")

connectDB()
// app.use(cors({
//   origin: "http://localhost:5173",  // Replace with your React app's origin
//   origin: "http://52.66.212.199",  // Replace with your React app's origin
//   credentials: true                // Allow cookies/authorization headers
// }));
const allowedOrigins = ["http://localhost:5173", "http://52.66.212.199","https://mathav.xyz","https://final.mathav.xyz"];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json())

app.use("/api",router)

app.get('/', (req,res)=>{
 res.send("hello mathavan sundar vasanth KT")
}) 

app.get('/no', (req,res)=>{
 res.send("hello no nono")
}) 




app.listen((process.env.PORT),()=>{
    console.log(`server running in port ${process.env.PORT}`);
    
})
