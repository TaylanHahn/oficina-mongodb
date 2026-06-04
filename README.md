# 🍃 Oficina de MongoDB: Do Zero ao NoSQL

Bem-vindos! Hoje vamos colocar a mão na massa e conhecer o poder do banco de dados NoSQL mais famoso do mundo.

## 🚀 1. Como acessar o laboratório
Não é necessário instalar nada no seu computador!
1. Faça login na sua conta do GitHub.
2. Clique no botão verde **"<> Code"** no topo desta página.
3. Selecione a aba **Codespaces**.
4. Clique em **"Create codespace on main"**.
5. Aguarde o VS Code carregar no seu navegador — pode levar **2 a 3 minutos** enquanto o MongoDB é instalado e o banco é populado automaticamente.

## 🔌 2. Conectando ao Banco

O servidor MongoDB já estará rodando exclusivo para você, com os dados carregados!

1. No menu lateral esquerdo do VS Code, clique no **ícone de folhinha verde** (MongoDB).
2. Clique em **Connect**.
3. Na barra que aparecer no topo do VS Code, digite a string abaixo e pressione **Enter**:
   ```
   mongodb://localhost:27017
   ```
4. Pronto! Você verá o banco `oficina_mongodb` aparecer na barra lateral.

## 💻 3. Como rodar os testes (Playground)

O arquivo `testes.mongodb.js` já está pronto no repositório!

1. Clique nele no explorador de arquivos (barra lateral esquerda).
2. Um botão **▶️ Run Playground** aparecerá no topo direito do arquivo.
3. Clique nele para executar e ver os resultados!

---

### 🧪 Roteiro de Testes

Abra o arquivo `testes.mongodb.js` e substitua o conteúdo pelos comandos abaixo, um de cada vez.

**Teste 1: Trazendo todos os livros**
```js
use('oficina_mongodb');
db.livros.find()
```

**Teste 2: Buscando por um autor específico**
```js
use('oficina_mongodb');
db.livros.find({ autor: "Machado de Assis" })
```

**Teste 3: O Poder do NoSQL — buscando dentro de listas**
```js
use('oficina_mongodb');
db.livros.find({ generos: "Ficção Científica" })
```

**Teste 4: Operadores de comparação — livros publicados antes de 1900**
```js
use('oficina_mongodb');
db.livros.find({ ano: { $lt: 1900 } })
```

**Teste 5: Adicionando campos dinamicamente (Schemaless)**
```js
use('oficina_mongodb');
db.livros.updateOne(
  { titulo: "O Alienista" },
  { $set: { paginas: 112 } }
)
```

Depois, rode o comando abaixo para ver o campo novo:
```js
use('oficina_mongodb');
db.livros.find({ titulo: "O Alienista" })
```
