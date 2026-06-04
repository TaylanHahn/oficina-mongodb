// Conecta no banco de dados (cria automaticamente se não existir)
db = db.getSiblingDB('oficina_mongodb');

// Limpa a coleção caso o script seja rodado mais de uma vez
db.livros.drop();

// Insere dados de exemplo
db.livros.insertMany([
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, generos: ["Fantasia", "Aventura"] },
    { titulo: "1984", autor: "George Orwell", ano: 1949, generos: ["Ficção Científica", "Distopia"] },
    { titulo: "Duna", autor: "Frank Herbert", ano: 1965, generos: ["Ficção Científica"] },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, generos: ["Romance", "Literatura Brasileira"] }
]);

print("✅ Banco de dados 'oficina_mongodb' populado com sucesso para a aula!");
