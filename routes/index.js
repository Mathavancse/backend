const express = require("express")
const router = express.Router()
const register = require("./register")
const login = require("./login")
const protected = require("./protected")

router.use("/register",register)
router.use("/login",login)
router.use("/protected",protected)
module.exports = router