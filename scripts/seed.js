// Conecta no banco de dados chamado 'oficina_mongodb'
db = db.getSiblingDB('oficina_mongodb');

// Limpa a coleção caso o script seja rodado mais de uma vez
db.livros.drop();

// Insere dados de exemplo com autores brasileiros
db.livros.insertMany([
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, generos: ["Romance", "Realismo", "Literatura Brasileira"] },
    { titulo: "O Alienista", autor: "Machado de Assis", ano: 1882, generos: ["Sátira", "Realismo", "Conto"] },
    { titulo: "Não Verás País Nenhum", autor: "Ignácio de Loyola Brandão", ano: 1981, generos: ["Ficção Científica", "Distopia", "Literatura Brasileira"] },
    { titulo: "A Hora da Estrela", autor: "Clarice Lispector", ano: 1977, generos: ["Romance", "Drama", "Literatura Brasileira"] },
    { titulo: "O Mestre dos Desejos", autor: "Gerson Lodi-Ribeiro", ano: 2021, generos: ["Ficção Científica", "História Alternativa"] }
]);

print("✅ Banco de dados 'oficina_mongodb' populado com autores brasileiros!");
