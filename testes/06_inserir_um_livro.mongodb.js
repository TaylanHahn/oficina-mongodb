use('oficina_mongodb');

// Teste 6: Inserindo um novo documento com insertOne()
// Adiciona um único livro novo à coleção.
// Após rodar, abra o teste 01 novamente e veja que ele aparece na lista!

db.livros.insertOne({
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    ano: 1938,
    generos: ["Romance", "Regionalismo", "Literatura Brasileira"]
})
