use('oficina_mongodb');

// Teste 1: Buscar todos os documentos da coleção "livros"
// No MongoDB, não existe "SELECT * FROM tabela" — usamos find() sem filtros.
// Cada resultado é um documento JSON com seus próprios campos.

db.livros.find()
