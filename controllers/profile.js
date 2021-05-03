const posts = require("../controllers/posts");
const Post = require("../models/Post");

module.exports = {
    getProfile: (req,res)=>{
        res.render('profile.ejs', { posts: postItems, user: req.user });
    },

    deletePost: async (req, res) => {
    try {
      await Post.findOneAndDelete({ _id: req.body.postIdFromJSFile });
      console.log({ _id: req.body.postIdFromJSFile });
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
},
    
}