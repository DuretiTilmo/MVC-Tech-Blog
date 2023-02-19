const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates new blogs
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
          ...req.body,
          id: req.session.id,
        });
    
        res.status(200).json(newBlog);
      } catch (err) {
        res.status(400).json(err);
      }
});

//deletes selected blog
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          id: req.session.id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;