# 💳 Mini Banco API

Este projeto é uma simulação de uma aplicação bancária desenvolvida com **Node.js** utilizando a arquitetura **MVC (Model-View-Controller)**. Ele permite operações básicas como criação de contas, login, depósitos, saques com regras específicas, consulta de saldo e geração de extrato.

> ⚠️ O backend está em desenvolvimento contínuo. Futuramente será integrado com um frontend em **React.js** e **Bootstrap** para uma interface moderna e responsiva.

---

## 🧠 Objetivo do Projeto

Criar uma aplicação que simule o funcionamento de um sistema bancário simples, com foco em:

- Organização de código usando boas práticas de arquitetura
- Aplicação de regras de negócio reais (limites, extrato, autenticação)
- Persistência de dados inicialmente com JSON e posteriormente com SQL
- Preparação para integração com frontend

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework para construção de APIs REST
- **UUID** – Geração de identificadores únicos para contas e transações
- **Nodemon** – Monitoramento de alterações durante o desenvolvimento

### Armazenamento
- **JSON** – Persistência inicial dos dados em arquivos locais
- **SQL (futuro)** – Migração para banco relacional com Sequelize ou PostgreSQL

### Frontend (futuro)
- **React.js** – Biblioteca para construção de interfaces dinâmicas
- **Bootstrap** – Framework CSS para estilização responsiva

---

## 🧱 Estrutura do Projeto
/backend  
    ├── controllers/ # Regras de controle e resposta às rotas  
    ├── models/ # Acesso e manipulação dos dados  
    ├── services/ # Regras de negócio (limites, extrato, etc.)  
    ├── routes/ # Definição das rotas da API  
    ├── database/ # Armazenamento em JSON ou SQL  
    ├── middlewares/ # Autenticação e validação  
    ├── utils/ # Funções auxiliares  
    └── app.js # Arquivo principal do servidor  

---

## 🔄 Fluxo da Aplicação

1. **Usuário envia requisição HTTP** (ex: `POST /sacar`)
2. **Rota** direciona para o **controller** correspondente
3. **Controller** valida dados e chama o **service** (se necessário)
4. **Service** aplica regras de negócio (ex: limite de saque)
5. **Model** acessa os dados (JSON ou SQL) e realiza a operação
6. **Controller** retorna a resposta ao usuário

---

## 📌 Funcionalidades Implementadas

- ✅ Criar conta
- ✅ Login
- ✅ Depositar
- ✅ Sacar com limite por valor e máximo de 3 saques diários
- ✅ Consultar saldo
- ✅ Gerar extrato com os últimos saques

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/mini-banco-api.git
   cd mini-banco-api

2. Instale as dependências:
    npm install

3. Inicie o servidor:
    npm run dev

O servidor será iniciado em http://localhost:3000 (ou porta definida no app.js)

---

📈 Melhorias Futuras

    🔄 Integração com banco de dados SQL
    🧑‍💻 Criação de frontend com React.js e Bootsrap
    🔐 Implementação de autenticação JWT
    📊 Dashboard com histórico de transações
    🧪 Testes automatizados com Jest ou Mocha

📄 Licença
    Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e contribuir.
