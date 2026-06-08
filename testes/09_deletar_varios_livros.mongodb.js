use('oficina_mongodb');

// Teste 9: Removendo vários documentos com deleteMany()
// Remove TODOS os documentos que corresponderem ao filtro.
// Cuidado: deleteMany({}) sem filtro apaga a coleção inteira!

db.livros.deleteMany({ autor: "João Guimarães Rosa" })

// Depois de rodar, execute o teste 01 para ver que ambos os livros
// de Guimarães Rosa foram removidos de uma vez.
