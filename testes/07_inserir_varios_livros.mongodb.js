use('oficina_mongodb');

// Teste 7: Inserindo vários documentos de uma vez com insertMany()
// Muito mais eficiente do que chamar insertOne() várias vezes.
// O MongoDB insere todos em uma única operação.

db.livros.insertMany([
    {
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        ano: 1937,
        generos: ["Romance", "Literatura Brasileira"]
    },
    {
        titulo: "Grande Sertão: Veredas",
        autor: "João Guimarães Rosa",
        ano: 1956,
        generos: ["Romance", "Regionalismo", "Literatura Brasileira"]
    },
    {
        titulo: "Sagarana",
        autor: "João Guimarães Rosa",
        ano: 1946,
        generos: ["Conto", "Regionalismo", "Literatura Brasileira"]
    }
])
