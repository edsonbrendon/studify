# Studify

Studify é uma plataforma para gerenciamento de estudos desenvolvida com Next.js. A aplicação permite que usuários organizem suas matérias, registrem sessões de estudo e acompanhem seu progresso por meio de um dashboard intuitivo.

O projeto foi desenvolvido com foco em boas práticas de arquitetura, utilizando Server Actions, Auth.js, Prisma ORM e PostgreSQL.

---

## Funcionalidades

- Autenticação de usuários
- Gerenciamento de matérias
- Registro de sessões de estudo
- Dashboard com estatísticas
- Gerenciamento de perfil
- Interface responsiva
- Server Actions
- Validação com Zod

---

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Auth.js (NextAuth v5)
- Prisma ORM
- PostgreSQL
- React Hook Form
- Zod
- Lucide React
- Vercel

---

## Arquitetura

O projeto segue uma arquitetura baseada na separação de responsabilidades.

```text
Component
    │
    ▼
Server Action
    │
    ▼
Service
    │
    ▼
Prisma ORM
```

### Componentes

Responsáveis apenas pela interface e interação com o usuário.

### Server Actions

Responsáveis por:

- Autenticação
- Validação dos dados
- Chamada dos serviços
- Revalidação das páginas

### Services

Responsáveis pelas regras de negócio da aplicação.

### Prisma ORM

Responsável pelo acesso e persistência dos dados.

---

## Estrutura do Projeto

```text
src
├── actions
├── app
├── components
│   ├── dashboard
│   ├── profile
│   ├── study-sessions
│   ├── subjects
│   └── ui
├── lib
├── schemas
├── services
├── types
├── auth.ts
├── auth.config.ts
└── middleware.ts

prisma
├── migrations
└── schema.prisma
```

---

## Banco de Dados

O projeto utiliza Prisma ORM com PostgreSQL.

Durante o desenvolvimento, é possível utilizar uma instância local do PostgreSQL ou um banco hospedado no Neon.

A aplicação em produção está publicada utilizando PostgreSQL hospedado no Neon.

Principais entidades:

- User
- Subject
- StudySession

Relacionamento entre as entidades:

```text
User
 ├── Subjects
 └── StudySessions

Subject
 └── StudySessions
```

---

## Dashboard

O dashboard apresenta um resumo das informações do usuário:

- Total de matérias cadastradas
- Total de sessões de estudo
- Total de minutos estudados
- Tempo estudado na semana
- Últimas sessões registradas

---

## Matérias

O usuário pode:

- Criar matérias
- Editar matérias
- Excluir matérias
- Visualizar matérias cadastradas

---

## Sessões de Estudo

Cada sessão de estudo possui:

- Matéria
- Data
- Duração
- Observações

---

## Perfil

O usuário pode atualizar:

- Nome

As alterações são refletidas imediatamente na sessão autenticada.

---

## Autenticação

A autenticação foi implementada utilizando Auth.js (NextAuth v5) com estratégia JWT.

Cada usuário possui acesso apenas aos seus próprios dados.

Para otimizar o bundle do middleware em produção, a configuração do Auth.js foi separada entre `auth.ts` e `auth.config.ts`, seguindo a recomendação oficial da biblioteca.

---

## Validação

Todas as entradas da aplicação são validadas utilizando Zod.

Além da validação realizada no cliente, todas as Server Actions validam os dados antes da execução das regras de negócio.

---

## Interface

A interface foi construída utilizando Tailwind CSS e Shadcn/UI.

O layout é totalmente responsivo, oferecendo uma boa experiência tanto em dispositivos móveis quanto em desktops.

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/edsonbrendon/studify.git
```

Acesse a pasta do projeto:

```bash
cd studify
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

> **Pré-requisito:** É necessário ter acesso a um banco PostgreSQL (local ou hospedado) e configurar a variável `DATABASE_URL`.

Preencha as variáveis:

```env
DATABASE_URL="postgresql://..."

AUTH_SECRET="your_auth_secret"

AUTH_URL="http://localhost:3000"
```

Gere o Prisma Client:

```bash
npm run prisma:generate
```

ou

```bash
npx prisma generate
```

Execute as migrations:

```bash
npx prisma migrate dev
```

Inicie a aplicação:

```bash
npm run dev
```

---

## Deploy

O projeto está preparado para deploy na Vercel utilizando PostgreSQL hospedado no Neon.

Para produção, configure as seguintes variáveis de ambiente:

- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_URL`

Após configurar as variáveis, basta realizar o deploy na Vercel.

---

## Scripts

| Script | Descrição |
|----------|-----------|
| `npm run dev` | Inicia a aplicação em modo de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Executa a aplicação em produção |
| `npm run lint` | Executa o ESLint |

---

## Decisões Técnicas

Durante o desenvolvimento foram adotadas as seguintes decisões:

- Utilização de Server Actions em vez de APIs REST internas;
- Separação da aplicação em Componentes, Server Actions e Services;
- Centralização da validação utilizando Zod;
- Utilização do Prisma ORM para acesso ao banco de dados;
- Banco de dados PostgreSQL;
- Componentes reutilizáveis construídos com Shadcn/UI;
- Autenticação utilizando Auth.js com JWT;
- Layout responsivo desenvolvido com Tailwind CSS.

---

## Melhorias Futuras

Algumas funcionalidades planejadas para versões futuras:

- Dashboard com gráficos
- Metas de estudo
- Calendário de estudos
- Modo escuro
- Pesquisa avançada
- Filtros por período

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos e de estudo.