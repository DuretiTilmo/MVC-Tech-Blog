const Blogs = require('./Blogs');
const User = require('./User');

User.hasMany(Blogs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
  foreignKey: 'user_id',
});



module.exports = { User, Blogs };