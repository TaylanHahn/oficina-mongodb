#!/bin/bash
set -e

echo "📦 Instalando MongoDB 7.0..."

# Importa a chave GPG e adiciona o repositório oficial
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
  https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt-get update -qq
sudo apt-get install -y mongodb-org

echo "🚀 Iniciando o servidor MongoDB..."
sudo mkdir -p /data/db
sudo mongod --fork --logpath /tmp/mongod.log --dbpath /data/db

echo "⏳ Aguardando MongoDB ficar pronto..."
until mongosh --quiet --eval "1" > /dev/null 2>&1; do
  sleep 2
done

echo "🌱 Populando o banco de dados..."
mongosh scripts/seed.js

echo ""
echo "✅ Tudo pronto! MongoDB rodando em localhost:27017"
echo "   Banco: oficina_mongodb | Coleção: livros"
