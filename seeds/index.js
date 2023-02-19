const sequelize = require('../config/connection');
const seedBlog = require('./blog');
const seedUserData = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUserData();

  process.exit(0);
};

seedAll();