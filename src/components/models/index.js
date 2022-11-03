const User = require('./User');
const Stock = require('./Stock');
const Comment = require('./Comment');

User.hasMany(Comment);
Comment.belongsTo(User);