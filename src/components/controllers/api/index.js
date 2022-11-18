const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/users", userRoutes)

const commentRoutes = require("./commentRoutes");
router.use("/comments", commentRoutes)

const stockRoutes = require("./stockRoutes");
router.use("/stocks", stockRoutes)

router.get("/showsessions", (req,res) => {
    res.json(req.session)
})

router.get("/checklogin", (req,res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"please login first"})
    }
    res.json({msg: `You are now logged in ${req.session.user.email}`})
})
module.exports = router;