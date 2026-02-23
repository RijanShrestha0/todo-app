# Redux Todo App

A todo app built with React, TypeScript, and Redux Toolkit. Add, complete, edit, and remove todos with routing for All, Active, and Completed views.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** – build tool and dev server
- **Redux Toolkit** – state management
- **React Redux** – React bindings for Redux
- **React Router DOM** – client-side routing

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Features

- **All** – view every todo
- **Active** – view only incomplete todos
- **Completed** – view only completed todos
- Add new todos
- Toggle completion
- Edit todo text
- Delete todos

Routes: `/` (all), `/active`, `/completed`.

## Project Structure

```
src/
├── App.tsx              # App shell and routes
├── main.tsx             # Entry, Redux Provider
├── store/
│   ├── index.ts         # Store config, RootState, AppDispatch
│   ├── hooks.ts         # useAppDispatch, useAppSelector
│   └── todosSlice.ts    # Todos slice and actions
├── types/
│   └── todo.ts          # Todo, TodoFilter types
├── hooks/
│   ├── useTodos.ts      # Todo CRUD + list from Redux
│   ├── useTodoFilters.ts # Filter by route, counts
│   └── useTodoForm.ts   # Add-todo form state
├── pages/
│   ├── HomePage.tsx     # All todos
│   ├── ActivePage.tsx   # Active todos
│   ├── CompletedPage.tsx # Completed todos
│   └── TodosPage.tsx    # Shared todo list UI
└── components/
    ├── Layout/          # Layout + nav
    ├── TodoForm/        # Add-todo form
    ├── TodoList/        # List of todos
    ├── TodoItem/        # Single todo (toggle, edit, remove)
    ├── Input/
    └── Button/
```

State lives in Redux (`todos` slice); filtering is derived from the current route and custom hooks expose data and actions to the UI.
