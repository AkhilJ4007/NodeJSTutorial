const express = require('express');

const adminData = require('./admin')
//
const rootDir = require('../util/path')


// this is to get the correct path in the sytsem bcoz / goes to system directory not root directory
const path = require("path")


const router = express.Router()

router.get("/",(req,res,next) => {
    console.log(adminData.Products)
// dirname is a global variable which has absolute path to the folder which it is in 
// we could directly write the path but join is used so that path is made compatible for both linux and windows systems
    res.sendFile(path.join(rootDir,'views','shop.html'));

})

module.exports = router  