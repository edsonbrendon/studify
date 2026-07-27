# Studify

O Studify é uma plataforma para gerenciamento de estudos desenvolvida com Next.js 15. A aplicação permite que usuários organizem suas matérias, registrem sessões de estudo e acompanhem seu progresso de forma simples e intuitiva.

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

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Auth.js (NextAuth)
- Prisma ORM
- SQLite
- React Hook Form
- Zod
- Lucide React

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
Prisma
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

### Prisma

Responsável pelo acesso e persistência dos dados.

---

## Estrutura do Projeto

```text
src
├── app
├── components
│   ├── dashboard
│   ├── layout
│   ├── profile
│   ├── study-sessions
│   ├── subjects
│   └── ui
├── lib
├── schemas
├── services
├── prisma
└── types
```

---

## Banco de Dados

O projeto utiliza Prisma ORM com SQLite durante o desenvolvimento.

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

A autenticação foi implementada utilizando Auth.js com estratégia JWT.

Cada usuário possui acesso apenas aos seus próprios dados.

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
git clone https://github.com/SEU-USUARIO/studify.git
```

Acesse a pasta do projeto:

```bash
cd studify
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente copiando o arquivo de exemplo:

```bash
cp .env.example .env
```

Depois, ajuste os valores conforme necessário.

Gere o cliente do Prisma:

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
- Componentes reutilizáveis construídos com Shadcn/UI;
- Layout responsivo desenvolvido com Tailwind CSS.

---

## Melhorias Futuras

Algumas funcionalidades planejadas para versões futuras:

- Dashboard com gráficos
- Metas de estudo
- Calendário de estudos
- Modo escuro
- Pesquisa avançada

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos e de estudo.