const express = require("express");
const router = express.Router();
const {Comment, User} = require("../../models");

router.get("/", (req, res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"please login first!"})
    }
    Comment.findAll({}).then(dbComment => {
        res.json(dbComment);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err});
    });
});

router.get("/:id", (req, res) => {
    if(!req.session.user){
        return res.status(401).json({msg:"plese login first!"})
    }
    Comment.findByPk(req.params.id,{})
    .then(dbComment => {
        res.json(dbComment);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    });
});

//needs create, update, and destroy routes

module.exports = router;