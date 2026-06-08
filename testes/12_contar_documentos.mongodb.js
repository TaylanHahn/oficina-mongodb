use('oficina_mongodb');

// Teste 12: Contando documentos e explorando listas com countDocuments()
// countDocuments() retorna quantos documentos batem com o filtro.
// Útil para saber quantos livros existem por gênero, por exemplo.

// Quantos são do gênero "Romance"?
db.livros.countDocuments({ generos: "Romance" })

// Quantos livros existem no total?
// db.livros.countDocuments()

// Quantos foram publicados a partir do século XX?
// db.livros.countDocuments({ ano: { $gte: 1900 } })
