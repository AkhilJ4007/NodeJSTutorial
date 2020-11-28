const http =  require('http');
const express = require('express');
// used to parse the req details
const bodyParser = require('body-parser')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')



const app = express()

// this is to get the correct path in the sytsem bcoz / goes to system directory not root directory
const path = require("path")


//***** ORDER MATTERS */

// GET IS USED FOR EXACT MATCHING but if use is used then order matters

app.use(bodyParser.urlencoded({extended: false}))

app.use("/admin",adminData.Routes)

// this gives access (it basically returns the folder) to public folder when a request for it is given
// exoress.static is used to serve static files
app.use(express.static(path.join(__dirname,"public")))

app.use(shopRoutes)


app.use((req,res,next) => {

    res.status(404).sendFile(path.join(__dirname,"views","404.html"))

})
// next() is used to go to the next middleware function
// middleware hear you get the request and you can also return the response



// this function both creates the server and also does the listen function of node.js
app.listen(3000)
