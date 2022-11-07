const express = require("express");
const { isRouteErrorResponse } = require("react-router-dom");
const router = express.Router();
const {Stock, User} = require("../../components/models");

router.get("/", (req, res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"please login first!"})
    }
    Stock.findAll({}).then(dbStock => {
        res.json(dbStock);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err});
    });
});

router.get("/:id", (req, res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"please login first!"})
    }
    Stock.findByPk(req.params.id,{}).then(dbStock => {
        res.json(dbStock);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err});
    });
});

module.exports = router;