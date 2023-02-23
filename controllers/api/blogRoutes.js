const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

// Creates new blogs
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    console.log("creator" + req.session.creator);
    console.log("ID = " + req.session.user_id);
    console.log("date" + new Date());
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
      creator: req.session.creator,
      date_created: new Date(),
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//deletes selected blog
router.delete("/:id", withAuth, async (req, res) => {
  console.log("ID-----" + req.params.id);
  console.log("User Id" + req.session.user_id);
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put("/:id", withAuth, (req, res) => {
  console.log("ID ---------" + req.params.id);
  Blog.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((blogData) => {
      if (!blogData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(blogData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
