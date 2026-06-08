use('oficina_mongodb');

// Teste 8: Removendo um documento com deleteOne()
// Remove o PRIMEIRO documento que corresponder ao filtro.
// Atenção: se não passar filtro nenhum, remove o primeiro da coleção!

db.livros.deleteOne({ titulo: "Vidas Secas" })

// Depois de rodar, execute o teste 01 para confirmar que ele sumiu.
