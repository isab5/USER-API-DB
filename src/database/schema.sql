CREATE DATABASE rede_social;

\c rede_social

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES 
    ('Thiago Ferreira', 'thiago.ferreira@email.com'),
    ('Marcelo Carboni', 'marcelo.carboni@email.com'),
    ('Eduardo Correia', 'eduardo.correia@email.com'),
    ('Felipe Santos', 'felipe.santos@email.com');

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    description VARCHAR(200)
);

INSERT INTO posts (user_id, description) VALUES 
    ( 1, 'EU AMO DS'),
    ( 2, 'EU AMO BACK-END'),
    ( 3, 'SOCORROOOOOOOO'),
    ( 4, 'VAI CORINTHIANS');

    ALTER TABLE users ADD COLUMN photo TEXT;
