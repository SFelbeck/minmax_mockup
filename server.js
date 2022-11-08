const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./src/controllers");
const session = require("express-session");
const sequelize = require("./src/components/config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3500;

const { User, Comment, Stock } = require("./src/components/models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        //idk if anything goes here :P
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("Tuning in to listen to PORT " + PORT);
    });
});