# Back End Agents

## Descrição

API backend para sistema de agentes inteligentes utilizando Fastify, Drizzle ORM, PostgreSQL com pgvector e integração com Google Gemini AI para processamento de áudio e geração de respostas baseadas em contexto.

---

## Tecnologias e Bibliotecas Principais

### Core
- **Node.js** (TypeScript) - Runtime JavaScript
- **Fastify** - Framework web de alta performance
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** - Banco de dados principal com extensão pgvector

### Integrações e Utilitários
- **Google Gemini AI** (`@google/genai`) - IA para transcrição e geração de respostas
- **Zod** - Validação de esquemas e tipagem
- **pgvector** - Extensão PostgreSQL para embeddings vetoriais
- **Docker** - Containerização do banco de dados

### Desenvolvimento
- **Biome** - Linter e formatter
- **TypeScript** - Tipagem estática
- **Drizzle Kit** - Ferramentas de migração e seed

---

## Arquitetura e Padrões de Projeto

### Estrutura de Pastas
```
src/
├── db/           # Camada de dados
│   ├── schema/   # Definições de tabelas
│   ├── migrations/ # Migrações do banco
│   └── connection.ts # Conexão com banco
├── http/         # Camada de apresentação
│   └── routes/   # Rotas da API
├── services/     # Camada de serviços
└── env.ts        # Configuração de ambiente
```

### Padrões Implementados
- **Clean Architecture** - Separação clara de responsabilidades
- **Repository Pattern** - Abstração do acesso a dados via Drizzle
- **Service Layer** - Lógica de negócio isolada
- **RESTful API** - Endpoints padronizados
- **Type Safety** - Validação em tempo de compilação com Zod
- **Environment Configuration** - Configuração tipada de variáveis

### Funcionalidades Principais
- **Gestão de Salas** - CRUD de salas de aula
- **Upload de Áudio** - Processamento e transcrição automática
- **Sistema de Perguntas** - IA contextual baseada em embeddings
- **Similaridade Vetorial** - Busca semântica com pgvector

---

## Setup e Configuração

### 1. Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- Conta Google Cloud (para API Gemini)

### 2. Instalação

```bash
npm install
```

### 3. Configuração do Banco de Dados

Suba o PostgreSQL com pgvector:

```bash
docker-compose up -d
```

**Configuração padrão:**
- Host: `localhost:5432`
- Database: `agents`
- Usuário: `docker`
- Senha: `docker`

### 4. Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
PORT=3333
GEMINI_API_KEY=sua_chave_api_gemini
```

### 5. Migrações e Seeds

```bash
# Gerar migrações (se necessário)
npm run db:generate

# Executar migrações
npm run db:migrate

# Popular banco com dados de teste
npm run db:seed
```

### 6. Executando o Projeto

**Desenvolvimento (hot reload):**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

---

## Endpoints da API

### Salas
- `GET /rooms` - Listar salas
- `POST /rooms` - Criar sala
- `GET /rooms/:roomId/questions` - Perguntas de uma sala

### Perguntas
- `POST /rooms/:roomId/questions` - Criar pergunta (IA contextual)

### Áudio
- `POST /rooms/:roomId/audio` - Upload e processamento de áudio

### Health Check
- `GET /health` - Status da aplicação

---

## Observações Importantes

- **IA Contextual**: O sistema usa embeddings vetoriais para buscar contexto relevante nas transcrições
- **Processamento de Áudio**: Suporte a upload de arquivos de áudio com transcrição automática
- **Similaridade Semântica**: Busca por similaridade vetorial com threshold de 0.7
- **Type Safety**: Validação completa de entrada/saída com Zod
- **Performance**: Fastify para alta performance e baixa latência

---

## Desenvolvimento

- Use **Biome** para lint/format: `npx @biomejs/biome check --write`
- As migrações são geradas automaticamente via Drizzle Kit
- Seeds incluem dados de teste para desenvolvimento 