# UnisantaLázaro - MVVM React App

Este é um projeto React + Vite + TypeScript + TailwindCSS seguindo o padrão arquitetural MVVM (Model-View-ViewModel).

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server
- **TypeScript** - Superset do JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Zod** - Biblioteca de validação de schemas
- **ESLint + Prettier** - Ferramentas de linting e formatação

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── providers/          # Providers globais (tema, DI, etc.)
│   └── routes/             # Definições de rotas/layouts
├── core/
│   ├── models/             # Entidades (Domain Models) e tipos
│   ├── viewmodels/         # Lógica de UI (estado + ações) - MVVM
│   ├── repositories/       # Abstrações de acesso a dados
│   ├── services/           # Serviços (HTTP, Auth, Cache)
│   └── utils/              # Helpers puros (formatters, etc.)
├── features/
│   └── users/              # Feature de usuários
│       ├── models/         # Modelos específicos da feature
│       ├── viewmodels/     # ViewModels específicos da feature
│       └── views/          # Componentes React (Views)
├── ui/                     # Design system (botões/inputs)
├── styles/                 # Estilos globais extras
└── main.tsx               # Boot da aplicação
```

## 🛠️ Comandos Disponíveis

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

- **Localização**: `src/features/*/views/`
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
  @apply max-w-7xl mx-auto px-4;
}
```

## 📝 Exemplo de Uso

O projeto inclui um exemplo completo de CRUD de usuários demonstrando:

1. **Model**: Schema Zod para validação de dados
2. **Repository**: Interface e implementação mock
3. **ViewModel**: Gerenciamento de estado e ações
4. **View**: Componente React com formulário e lista

Para ver o exemplo funcionando, execute `npm run dev` e acesse `http://localhost:5173`.

## 🔧 Configuração Adicional

### React Router (opcional)

Para adicionar roteamento:

```bash
npm i react-router-dom
```

### Ícones (recomendado)

Para usar ícones Lucide:

```bash
npm i lucide-react
```

## 📋 Próximos Passos

1. Implementar repositórios reais (API, localStorage, etc.)
2. Adicionar sistema de roteamento
3. Implementar sistema de temas
4. Adicionar testes unitários
5. Configurar CI/CD
