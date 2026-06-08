use('oficina_mongodb');

// Teste 11: Removendo um item de uma lista com $pull
// O operador $pull remove um valor específico do array,
// sem afetar os outros itens da lista.

db.livros.updateOne(
    { titulo: "Dom Casmurro" },
    { $pull: { generos: "Clássico" } }
)

// Rode o comando abaixo para confirmar que "Clássico" foi removido:
db.livros.find({ titulo: "Dom Casmurro" })
