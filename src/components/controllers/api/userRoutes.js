const express = require("express");
const router = express.Router();
const { User, Stock, Comment } = require("../../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    User.findAll({
        include: [Stock, Comment]
        //cant currently find where dbUsers is keep an eye out
    }).then(dbUsers => {
        res.json(dbUsers);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err});
    });
});

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id, {}).then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(newUser => {
            req.session.user = {
                user_id: newUser.id,
                name: newUser.name,
                logged_in: true
            }
            res.json(newUser);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});

//double check this one
router.put("/:id", (req, res) => {
    console.log(req.params.id)
    User.update({
        comment_id: req.params.id
    }, {
        where: {
            id: req.session.user.user_id
        }
    }).then(updatedUser => {
        res.json(updatedUser);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    });
});

//do another one for stocks

router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(delUser => {
        res.json(delUser);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/logout", (req, res) => {
    if (req.session.user.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post("/login", (req, res) => {
    console.log(req.body)
    User.findOne({
        where: {
            //user model needs email section
            email: req.body.email
        }
    }).then(foundUser => {
        console.log(foundUser.id)
        if (!foundUser) {
            return res.status(400).json({ msg: "wrong login credentials"}) 
        }
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.save(() => {
                req.session.user = {
                    user_id: foundUser.id,
                    name: foundUser.name,
                    logged_in: true
                }
                return res.json(foundUser)
            });
        } else {
            return res.status(400).json({ msg: "wrong login credentials" })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err});
    });
});

module.exports = router;