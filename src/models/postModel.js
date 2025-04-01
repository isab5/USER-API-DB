const pool = require("../config/database");

const getPosts = async () => {
    const result = await pool.query(`SELECT posts.*, users.name AS user_name FROM posts LEFT JOIN users ON posts.user_id = users.id`);
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query(`SELECT posts.*, users.name AS user_name FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE posts.id = $1`, [id]);
    return result.rows[0];
};

const createPost = async (user_id, description) => {
    const result = await pool.query(
        "INSERT INTO posts (user_id, description) VALUES ($1, $2) RETURNING *",
        [user_id, description]
    );
    return result.rows[0];
};

const updatePost = async (id, user_id, description) => {
    const result = await pool.query(
        `UPDATE posts SET user_id = $1, description = $2 WHERE id = $3 RETURNING *`,
        [user_id, description, id]
    );
    return result.rows[0];
};

const deletePost = async (id) => {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Post não encontrado." };
    }

    return { message: "Post deletado com sucesso!" };
};

const getPostByUser = async (user_id) => {
    const result = await pool.query(
        `SELECT posts.*, users.name AS username FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE user_id = $1`,
        [user_id]
    );
    return result.rows[0];
}

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost, getPostByUser };