const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar posts!"});
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post não encontrado!" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar post" });
    }
};

const createPost = async (req, res) => {
    try {
        const { user_id, description } = req.body;
        const newPost = await postModel.createPost(user_id, description);
        res.status(201).json(newPost);
    } catch (error) {
     console.log(error);
        res.status(400).json({ message: "Erro ao postar!" });
    }
};

const updatePost = async (req, res) => {
    try {
        const { user_id, description } = req.body;
        const updatedPost = await postModel.updatePost(req.params.id, user_id, description);
        if (!updatedPost) {
            return res.status(404).json({ message: "Post não encontrado!" });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar Post!" });
    }
};

const deletePost = async (req, res) => {
    try {
        const message = await postModel.deletePost(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ message: "Erro ao deletar post!" });
    }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost};
