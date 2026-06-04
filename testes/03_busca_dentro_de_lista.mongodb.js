use('oficina_mongodb');

// Teste 3: O poder do NoSQL — buscar dentro de listas
// O campo "generos" de cada livro é uma lista (array) de valores.
// No MongoDB, o find() consegue buscar dentro dessas listas automaticamente,
// sem nenhum JOIN ou tabela extra. Isso é uma das grandes vantagens do NoSQL!

db.livros.find({ generos: "Ficção Científica" })
