use('oficina_mongodb');

// Teste 10: Adicionando um item a uma lista com $push
// O operador $push adiciona um novo valor ao array "generos"
// sem apagar os que já existiam.
// Muito diferente do $set, que substituiria a lista inteira!

db.livros.updateOne(
    { titulo: "Dom Casmurro" },
    { $push: { generos: "Clássico" } }
)

// Rode o comando abaixo para ver o array atualizado:
db.livros.find({ titulo: "Dom Casmurro" })
