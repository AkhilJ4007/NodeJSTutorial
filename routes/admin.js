const express = require('express');

const router = express.Router()

const products = []

const rootDir = require('../util/path')

// this is to get the correct path in the sytsem bcoz / goes to system directory not root directory
const path = require("path");

// admin/addProduct get req
router.get("/addProduct",(req,res,next) => {

    // dirname is a global variable which has absolute path to the folder which it is in 
// we could directly write the path but join is used so that path is made compatible for both linux and windows systems
    res.render('add-product')

})

//without executing next function it wont go to the next middleware in sequence

//admin/addProduct post req
router.post("/addProduct",(req,res,next) => {
    products.push({title : req.body.title})
    res.redirect("/")

})

module.exports = {
    Routes: router,
    Products: products
}