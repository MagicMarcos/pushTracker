const Post = require("../models/Post");

module.exports = {
  getPosts: async (req, res) => {
    
    try {
      const postItems = await Post.find({ userId: req.user.id, userName: req.user.githubUsername });
      res.render("profile.ejs", { posts: postItems.reverse(), user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    console.log(req.user);
    try {
      await Post.create({
        repoLink: req.body.repoLink,
        description: req.body.description,
        userId: req.user.id,
        userName: req.user.githubUsername
      });
      console.log("Post has been added!");
      res.redirect("/profile");

    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    
    try {
      await Post.findOneAndDelete({ _id: req.body.postIdFromJSFile });
      console.log("Deleted Post");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },

  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate({ _id: req.body.postIdFromJSFile }, {
        count: req.body.countS + 1

      })
      console.log('like Added')
      res.json('like Added')
    } catch (err) {
      console.log(err)
    }
  }
};
