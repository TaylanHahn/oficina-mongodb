use('oficina_mongodb');

// Teste 5b: Verificando o resultado do teste anterior
// Rode este arquivo após o 05a e veja que agora "O Alienista"
// possui o campo "paginas", enquanto os outros livros não têm.
// Isso é o Schemaless na prática!

db.livros.find({ titulo: "O Alienista" })
