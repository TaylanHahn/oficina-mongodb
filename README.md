# 🍃 Oficina de MongoDB: Do Zero ao NoSQL

Bem-vindos! Hoje vamos colocar a mão na massa e conhecer o poder do banco de dados NoSQL mais famoso do mundo.

## 🚀 1. Como acessar o laboratório
Não é necessário instalar nada no seu computador!
1. Faça login na sua conta do GitHub.
2. Clique no botão verde **"<> Code"** no topo desta página.
3. Selecione a aba **Codespaces**.
4. Clique em **"Create codespace on main"**.
5. Aguarde o VS Code carregar no seu navegador (pode levar cerca de 2 minutos).

## 🔌 2. Conectando ao Banco
Nosso ambiente já subiu um servidor MongoDB exclusivo para você, já populado com dados!
1. No menu lateral esquerdo do VS Code, clique no **ícone de folhinha** (MongoDB).
2. Clique em **Add Connection**.
3. Deixe tudo como está e clique em **Connect** (ele vai conectar automaticamente em `localhost:27017`).

## 💻 3. Como rodar os testes (Playground)
1. No VS Code, crie um arquivo novo chamado `testes.mongodb.js`
2. Na primeira linha do arquivo, escreva `use('oficina_mongodb');`
3. O VS Code vai reconhecer automaticamente que este é um ambiente de testes do Mongo.
4. Cole os comandos abaixo (um de cada vez) e clique no botão **▶️ Play** (Run Playground) que aparecerá no topo direito do arquivo ou acima do código!

---

### 🧪 Roteiro de Testes

**Teste 1: Trazendo todos os livros**

````js
db.livros.find()
````

**Teste 2: Buscando por um autor específico**

````js
db.livros.find({ autor: "Machado de Assis" })
````

**Teste 3: O Poder do NoSQL (Buscando dentro de listas)**

````js
db.livros.find({ generos: "Ficção Científica" })
````

**Teste 4: Operadores de comparação (Livros publicados antes do século XX - < 1900)***
````js
db.livros.find({ ano: { $lt: 1900 } })
````

**Teste 5: Adicionando colunas dinamicamente (Schemaless)**
````js
db.livros.updateOne(
  { titulo: "O Alienista" }, 
  { $set: { paginas: 112 } }
)
````

**Depois, rode novamente para ver a diferença!**
````js
db.livros.find({ titulo: "O Alienista" })
````
