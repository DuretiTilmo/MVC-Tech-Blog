const { Blog } = require('../models');

const blogs = [
  {
   title: 'Why MVC is so important',
   content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design and the Controller layer for applicaation logic.',
   creator: 'Xandromus',
   date_created: new Date(),
 
  },
  {
   title: 'Authentication vs. Authorization',
   content: 'There is a difference between authentication and authorization means confirming your own identity, whereas authorization means being allowed access to the system.',
   creator: 'Xandromus',
   date_created: new Date(),
  
  },
  {
   title: 'Object-Relational Mapping',
   content: 'I have already loved learning about ORMs. It has really simplified the way I create queries in SQL!',
   creator: 'Lernantino',
   date_created: new Date(),

  },
];

const seedBlog = () => Blog.bulkCreate(blogs);

module.exports = seedBlog;