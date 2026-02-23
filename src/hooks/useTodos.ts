import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTodo, toggleTodo, removeTodo, editTodo } from '../store/todosSlice';

export function useTodos() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  const add = useCallback(
    (text: string) => {
      if (text.trim()) dispatch(addTodo(text));
    },
    [dispatch]
  );

  const toggle = useCallback(
    (id: string) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const remove = useCallback(
    (id: string) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const edit = useCallback(
    (id: string, text: string) => {
      if (text.trim()) dispatch(editTodo({ id, text }));
    },
    [dispatch]
  );

  return { todos, add, toggle, remove, edit };
}
