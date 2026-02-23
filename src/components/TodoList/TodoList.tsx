import { TodoItem } from '../TodoItem/TodoItem';
import type { Todo } from '../../types/todo';
import styles from './TodoList.module.css';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  emptyMessage?: string;
};

export function TodoList({
  todos,
  onToggle,
  onRemove,
  onEdit,
  emptyMessage = 'No items yet.',
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className={styles.empty} role="status">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className={styles.list} aria-label="Todo list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
