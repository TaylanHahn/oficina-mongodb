# 🍃 Oficina de MongoDB: Do Zero ao NoSQL

## Bem-vindos! 
## Hoje vamos colocar a mão na massa e conhecer o poder do banco de dados NoSQL mais famoso do mundo.

### 🚀 1. Como acessar o laboratório
Não é necessário instalar nada no seu computador!
1. Faça login na sua conta do GitHub.
2. Clique no botão verde **"<> Code"** no topo desta página.
3. Selecione a aba **Codespaces**.
4. Clique em **"Create codespace on main"**.
5. Aguarde o VS Code carregar no seu navegador — pode levar **2 a 3 minutos** enquanto o MongoDB é instalado e o banco é populado automaticamente.

### 🔌 2. Conectando ao Banco

O servidor MongoDB já estará rodando exclusivo para você, com os dados carregados!

1. No menu lateral esquerdo do VS Code, clique no **ícone de folhinha verde** (MongoDB).
2. Clique em **Connect**.
3. Na barra que aparecer no topo do VS Code, digite a string abaixo e pressione **Enter**:
   ```
   mongodb://localhost:27017
   ```
4. Pronto! Você verá o banco `oficina_mongodb` aparecer na barra lateral.

### 💻 3. Como rodar os testes (Playground)

Os arquivos de teste já estão prontos na pasta **`testes/`**!

1. No explorador de arquivos (barra lateral esquerda), abra a pasta `testes`.
2. Clique no arquivo do teste que deseja rodar.
3. Um botão **▶️ Run Playground** aparecerá no topo direito do arquivo — clique nele.
4. Aprecerá no canto inferior um pop-up, clique no botão de cor AZUL.
5. Na tela do MongoDB irá aparecer `Create Playground`, clique nesse botão e aguarde.
6. O resultado aparecerá em um painel ao lado. Leia o comentário no topo de cada arquivo para entender o que está sendo feito!

---

### 🧪 Roteiro de Testes

| Arquivo | O que faz |
|---|---|
| `01_todos_os_livros.mongodb.js` | Busca todos os documentos da coleção |
| `02_busca_por_autor.mongodb.js` | Filtra por um campo específico |
| `03_busca_dentro_de_lista.mongodb.js` | Busca dentro de um campo que é uma lista |
| `04_operadores_de_comparacao.mongodb.js` | Usa operadores como `$lt` para comparar valores |
| `05a_adicionar_campo.mongodb.js` | Adiciona um campo novo em um documento (Schemaless) |
| `05b_verificar_campo_novo.mongodb.js` | Confirma o resultado do teste anterior |
