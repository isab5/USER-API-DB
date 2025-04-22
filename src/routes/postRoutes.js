const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const upload = require("../config/upload");
const apiKeyMiddleware = require('../config/apiKey.js')

router.use(apiKeyMiddleware);

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de postagens
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lista todos as postagens
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de postagem
 */
router.get("/posts", postController.getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Busca post por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */
router.get("/posts/:id", postController.getPostById);

/**
 * @swagger
 * /api/userpost:
 *   get:
 *     summary: Busca post por User
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */
router.get("/userpost", postController.getPostByUser);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Cria uma nova postagem
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               description:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Post criado
 */
router.post("/posts",  upload.single("photo"),postController.createPost);

/**
* @swagger
* /api/posts/{id}:
*   put:
*     summary: Atualiza uma postagem
*     tags: [Posts]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               email:
*                 type: string
*     responses:
*       200:
*         description: Postagem atualizada
*/
router.put("/posts/:id", postController.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Deleta uma postagem
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Postagem deletada
 */
router.delete("/posts/:id", postController.deletePost);

module.exports = router;