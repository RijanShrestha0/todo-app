import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import type { TodoFilter } from '../types/todo';

const filterMap: Record<string, TodoFilter> = {
  '/': 'all',
  '/active': 'active',
  '/completed': 'completed',
};

export function useTodoFilters() {
  const { pathname } = useLocation();
  const todos = useAppSelector((state) => state.todos);

  const filter = filterMap[pathname] ?? 'all';

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
      default:
        return [...todos];
    }
  }, [todos, filter]);

  const counts = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter((t) => !t.completed).length,
      completed: todos.filter((t) => t.completed).length,
    }),
    [todos]
  );

  return { filteredTodos, filter, counts };
}
