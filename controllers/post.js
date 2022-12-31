const Post = require("../models/Post");

// SHOW ALL POSTS
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post
            .find()
            .populate("user", "first_name last_name picture cover username gender")
            .populate("comments.commentBy", "first_name last_name picture username commentAt")
            .sort({ createdAt: -1 });
        res.json(posts);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// CREATE POST
exports.createPost = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.json(post);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// COMMENT
exports.comment = async (req, res) => {
    try {
        const { comment, image, postId } = req.body;
        let newComments = await Post.findByIdAndUpdate(postId, {
            $push: {
                comments: {
                    comment: comment,
                    image: image,
                    commentBy: req.user.id,
                    commentAt: new Date(),
                }
            }
        }, {
            new: true,
        }).populate("comments.commentBy", "picture first_name last_name username");
        res.json(newComments.comments);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}