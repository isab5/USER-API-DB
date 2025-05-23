const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API dos Users e Posts',
            version: '1.0.0',
            description: 'Documentação da API para gerenciar usuários e posts de uma rede social',
        },
    },
    apis: ['./src/routes/*.js'], // <- Caminho das suas rotas
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;

