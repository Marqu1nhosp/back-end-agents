# Back End Agents

## Descrição

API backend utilizando Fastify, Drizzle ORM e PostgreSQL (com extensão pgvector).

---

## Tecnologias e Bibliotecas Principais

- **Node.js** (TypeScript)
- **Fastify** (`fastify`, `@fastify/cors`, `fastify-type-provider-zod`)
- **Drizzle ORM** (`drizzle-orm`, `drizzle-kit`, `drizzle-seed`)
- **PostgreSQL** (com extensão `pgvector`)
- **Zod** (validação de esquemas)
- **Biome** (lint e formatação)
- **Docker** (para banco de dados)

---

## Padrões de Projeto

- Organização modular por rotas e domínio (`src/http/routes`)
- Validação e tipagem forte com Zod e TypeScript
- Separação de camadas: rotas, banco de dados, schemas
- Uso de variáveis de ambiente tipadas

---

## Setup e Configuração

### 1. Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

### 2. Instalação

```bash
npm install
```

### 3. Configuração do Banco de Dados

Suba o banco de dados PostgreSQL com a extensão pgvector:

```bash
docker-compose up -d
```

A configuração padrão cria o banco `agents` com usuário e senha `docker`.

### 4. Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
PORT=3333
```

### 5. Rodando o Projeto

- Ambiente de desenvolvimento (hot reload):

  ```bash
  npm run dev
  ```

- Produção:

  ```bash
  npm start
  ```

### 6. Migrações e Seeds

- Rodar seeds:

  ```bash
  npm run db:seed
  ```

---

## Observações

- O projeto utiliza o **Biome** para lint/format. Recomenda-se rodar o lint antes de commitar.
- As rotas seguem padrão REST e validação com Zod.
- O banco de dados precisa da extensão `vector` habilitada (já configurada no Docker). 