const express = require("express")
const router = express.Router()
const auth =require("../middleware/auth")
const {getprotected} =require("../controller/protected")
router.get("/",auth,getprotected)

module.exports = router