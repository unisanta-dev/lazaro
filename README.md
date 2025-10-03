# UnisantaLázaro - CRM Portal de Inscrição

O **UnisantaLázaro** é um sistema de **CRM (Customer Relationship Management)** desenvolvido para a **Universidade Santa Cecília (Unisanta)**, com o objetivo de **gerenciar e otimizar todo o processo de inscrição de candidatos**.

Este portal permite que a equipe de admissões acompanhe cada candidato desde a **primeira triagem** até a sua efetiva matrícula como aluno, garantindo uma experiência mais organizada, ágil e eficiente.

### Principais objetivos do sistema:

- **Triagem de candidatos:** registrar e analisar dados dos candidatos de forma estruturada.
- **Gerenciamento de etapas:** acompanhar o progresso do candidato em cada fase do processo de inscrição.
- **Comunicação centralizada:** facilitar o contato e acompanhamento por parte da equipe administrativa.
- **Registro histórico:** manter histórico completo do processo de cada candidato, permitindo relatórios e análises futuras.

O **UnisantaLázaro** é uma ferramenta estratégica que ajuda a universidade a **otimizar o fluxo de inscrições**, reduzir retrabalho e melhorar a experiência tanto dos candidatos quanto da equipe interna.

## 🚀 Tecnologias

- **React 18** - Biblioteca para criar e gerenciar UIs
- **Vite** - Ferramenta de contrução para servidor de desenvolvimento de projetos frontend
- **Tailwind** - Framework CSS, que fornece classes pré-definidas para estilizar páginas web diretamente no HTML
- **Zod** - Biblioteca JavaScript/TypeScript para validação de esquemas de dados
- **TypeScript** - Superconjunto da linguagem de programação JavaScript criado pela Microsoft que adiciona tipagem estática opcional e recursos de programação orientada a objetos
- **Prettier** - Formatador de código opinativo que automatiza a formatação de código
- **ESLint** - Ferramenta de "linter" para JavaScript e TypeScript que realiza análise estática de código, identificando problemas de estilo e padrões problemáticos
- **Autoprefixer** - Pós-processador de CSS que adiciona automaticamente os prefixos de fornecedor (como -webkit-, -moz-, etc.)
- **PostCSS** - Sistema de plugins em JavaScript para transformar código CSS, permitindo que desenvolvedores usem sintaxe moderna
- **Motion** - Biblioteca para animações
- **React Icons** - Biblioteca com ícones do React
- **TanStack** - Ecossistema de ferramentas de código aberto para o desenvolvimento web

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── providers/          # Providers globais (tema, DI, etc.)
│   └── routes/             # Definições de rotas/layouts
├── core/
│   ├── components/         # Widgets para usar nas views
│   ├── models/             # Entidades (Domain Models) e tipos
│   ├── repositories/       # Abstrações de acesso a dados
│   ├── services/           # Serviços (HTTP, Auth, Cache)
│   ├── utils/              # Helpers puros (formatters, etc.)
│   ├── viewmodels/         # Lógica de UI (estado + ações) - MVVM
│   └── views/              # Telas do projeto (Views)
│
├── ui/                     # Design system (botões/inputs)
├── styles/                 # Estilos globais extras
└── main.tsx                # Boot da aplicação

tests/                      # Estrutura de testes (Replica a estrutura do src)
├── unit/                   # Armazena todos os teste unitário
│   ├── components/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── utils/
│   ├── viewmodels/
│   └── views/
├── integration/            # Armazena todos os teste de integração
│   ├── providers/
│   └── routes/
```

## 🛠️ Comandos

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
npm run lint:fix

# Formatação
npm run format
npm run format:check
```

## 🏗️ Arquitetura MVVM

### Model (Modelo)

- **Localização**: `src/core/models/`
- **Responsabilidade**: Define as entidades de domínio e schemas de validação
- **Exemplo**: `User.ts` com schema Zod e tipos TypeScript

### View (Visualização)

- **Localização**: `src/core/views/`
- **Responsabilidade**: Componentes React que renderizam a UI
- **Exemplo**: `UserList.tsx` que consome o ViewModel

### ViewModel (Modelo de Visualização)

- **Localização**: `src/core/viewmodels/`
- **Responsabilidade**: Gerencia estado da UI e ações do usuário
- **Exemplo**: `UserViewModel.ts` com métodos para carregar/criar/deletar usuários

### Repository (Repositório)

- **Localização**: `src/core/repositories/` e `src/core/services/`
- **Responsabilidade**: Abstração para acesso a dados
- **Exemplo**: `UserRepository.ts` (interface) e `MockUserRepository.ts` (implementação)

## 🎨 TailwindCSS

O projeto está configurado com TailwindCSS e inclui uma classe utilitária personalizada:

```css
.container-page {
  @apply mx-auto max-w-7xl px-4;
}
```

## 📝 Exemplo de Uso

O projeto inclui um exemplo completo de CRUD de usuários demonstrando:

1. **Model**: Schema Zod para validação de dados
2. **Repository**: Interface e implementação mock
3. **ViewModel**: Gerenciamento de estado e ações
4. **View**: Componente React com formulário e lista

Para ver o exemplo funcionando, execute `npm run dev` e acesse `http://localhost:5173`.

### Estrutura do Componente

```typescript
// src/core/views/Login.tsx
const Login: React.FC<LoginProps> = () => {
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  // ... resto da implementação
}
```

### Layout Responsivo

#### Desktop (lg+)

- **Seção de Branding (50%)**:
  - Fundo com gradiente azul UNISANTA (`from-primary to-secondary`)
  - Logo UNISANTA centralizada
  - Elementos decorativos (círculos com transparência)
  - Animações de entrada suaves

- **Seção do Formulário (50%)**:
  - Fundo branco
  - Formulário centralizado
  - Campos de e-mail e senha
  - Checkbox "Lembrar-me"
  - Link "Esqueci minha senha"
  - Botão "Entrar" com animações

#### Mobile

- **Formulário em tela cheia**
- **Logo oculta** para economizar espaço
- **Layout centralizado** e otimizado para toque

### Funcionalidades

#### 1. Formulário de Login

- **Campos**: E-mail e Senha usando `FlutterInput`
- **Validação**: Campos obrigatórios
- **Checkbox**: "Lembrar-me" para persistência de sessão
- **Botão**: "Entrar" com animações de hover e clique

#### 2. Modal de Recuperação de Senha

- **Abertura**: Clique em "Esqueci minha senha"
- **Conteúdo**: Campo de e-mail para recuperação
- **Validação**: E-mail obrigatório
- **Ações**: Botões "Cancelar" e "Enviar"
- **Fechamento**: X, Cancelar, ou clique fora do modal

### Animações

O componente utiliza **Framer Motion** para animações suaves:

```typescript
// Animação de entrada da seção de branding
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

// Animação do modal
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

### Estados do Componente

```typescript
// Estado do modal de recuperação
const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)

// Estado do e-mail no modal
const [email, setEmail] = useState('')
```

### Event Handlers

```typescript
// Abertura do modal
onClick={() => setIsForgotPasswordModalOpen(true)}

// Fechamento do modal
onClick={() => setIsForgotPasswordModalOpen(false)}

// Envio do formulário de recuperação
const handleForgotPassword = (e: React.FormEvent) => {
  e.preventDefault()
  // Lógica de envio do e-mail
  setIsForgotPasswordModalOpen(false)
  setEmail('')
}
```

### Responsividade

```css
/* Desktop */
lg:w-1/2          /* 50% da largura */
lg:flex           /* Layout flexível */
lg:p-12           /* Padding maior */

/* Mobile */
w-full            /* Largura total */
p-8               /* Padding menor */
hidden            /* Seção de branding oculta */
```
