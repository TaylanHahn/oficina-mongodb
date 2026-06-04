use('oficina_mongodb');

// Teste 5: Schemaless — adicionando um campo que não existia antes
// Em bancos relacionais, adicionar uma coluna exige alterar a estrutura da tabela inteira.
// No MongoDB, cada documento pode ter campos diferentes.
// Aqui adicionamos o campo "paginas" só no livro "O Alienista", sem afetar os outros.

db.livros.updateOne(
  { titulo: "O Alienista" },
  { $set: { paginas: 112 } }
)

// Depois de rodar, abra o arquivo 05b para ver o resultado!
