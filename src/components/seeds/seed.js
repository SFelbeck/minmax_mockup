const sequelize = require("../config/connection")

const { User, Comment, Stock } = require ("../models")

const users = [
    {
        name: "TestUser",
        password: "password",
        stock_id: "1",
        comment_id: "1",
    },
]

const stocks = [
    {
        name: "Toosla",
        value: "12345",
    },
]

const comments = [
    {
        content: "Wowwee what a cool site",
        date_created: "2022-11-18",
    },
]

const feedSeed = async () => {
    try {
        await sequelize.sync({ force: true });
        await User.bulkCreate(users, {
            individualHooks: true
        });
        await Comment.bulkCreate(comments);
        await Stock.bulkCreate(stocks);
        process.exit(0);
    } catch (err) {
        console.log(err)
    }
}

feedSeed();