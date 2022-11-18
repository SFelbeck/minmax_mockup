const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const {User, Comment, Stock} = require ("../models");


router.use("/api", apiRoutes);

//not sure if i need this part

// router.get("/",(req,res)=>{
//     if(!req.session.user) {
//         return res.redirect("/login")
//     }
//     console.log(req.session)
// })

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/")
    }
    res.render("login")
})

module.exports = router;