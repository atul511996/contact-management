const express = require('express')
const router = express.Router()
const contact  = require("../controller/contact")
router.post("/addContact" , contact.addContact)
module.exports={
    router
}
