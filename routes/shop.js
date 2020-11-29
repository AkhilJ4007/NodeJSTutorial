const express = require('express');

const adminData = require('./admin')
//
const rootDir = require('../util/path')


// this is to get the correct path in the sytsem bcoz / goes to system directory not root directory
const path = require("path")


const router = express.Router()

router.get("/",(req,res,next) => {
    console.log(adminData.Products)
    const products = adminData.Products
// dirname is a global variable which has absolute path to the folder which it is in 
// we could directly write the path but join is used so that path is made compatible for both linux and windows systems
  //  res.sendFile(path.join(rootDir,'views','shop.html'));

//when using pug we just need to specify the pug file since the views folder is already configured
// we dont need to specify .pug bcoz the   
    res.render('shop',{prods : products, docTitle: "Shop"})

})

module.exports = router  