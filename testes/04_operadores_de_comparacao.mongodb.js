use('oficina_mongodb');

// Teste 4: Operadores de comparação
// O MongoDB tem operadores especiais para comparar valores:
//   $lt  → menor que        (less than)
//   $gt  → maior que        (greater than)
//   $lte → menor ou igual   (less than or equal)
//   $gte → maior ou igual   (greater than or equal)
//
// Aqui buscamos livros publicados antes do século XX (ano < 1900).

db.livros.find({ ano: { $lt: 1900 } })
