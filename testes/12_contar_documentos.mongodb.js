use('oficina_mongodb');

// Teste 12: Contando documentos e explorando listas com countDocuments()
// countDocuments() retorna quantos documentos batem com o filtro.
// Útil para saber quantos livros existem por gênero, por exemplo.

// Quantos livros existem no total?
db.livros.countDocuments()

// Quantos são de "Literatura Brasileira"?
db.livros.countDocuments({ generos: "Literatura Brasileira" })

// Quantos foram publicados a partir do século XX?
db.livros.countDocuments({ ano: { $gte: 1900 } })
