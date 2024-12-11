CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
)

INSERT INTO usuarios(nome, email, idade) VALUES(
   "Claudia de Souza Santana Leal",
   "calssleal@gmail.com",
   45
);

SELECT * FROM usuarios WHERE idade > 18;

DELETE FROM usuarios WHERE nome = "Lucas Santana"; //deleta exatamente o que tá escrito

UPDATE usuarios SET nome = "Lucas SL" WHERE nome = "Lucas Santana Leal";