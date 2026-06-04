use('oficina_mongodb');

// Teste 2: Buscar por um campo específico
// Passamos um objeto com o campo e o valor que queremos filtrar.
// É equivalente ao WHERE do SQL: SELECT * FROM livros WHERE autor = '...'

db.livros.find({ autor: "Machado de Assis" })
