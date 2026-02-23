import { useState, useRef, useEffect } from 'react';
import { Button } from '../Button';
import type { Todo } from '../../types/todo';
import styles from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export function TodoItem({ todo, onToggle, onRemove, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const handleSubmit = () => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    } else {
      setEditValue(todo.text);
    }
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') {
      setEditValue(todo.text);
      setEditing(false);
    }
  };

  return (
    <li
      className={`${styles.item} ${todo.completed ? styles.completed : ''} ${editing ? styles.editing : ''}`}
      data-testid={`todo-${todo.id}`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      {editing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSubmit}
          onKeyDown={handleKeyDown}
          className={styles.editInput}
          aria-label="Edit todo"
        />
      ) : (
        <span
          className={styles.text}
          onDoubleClick={() => setEditing(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setEditing(true)}
          aria-label={`Edit "${todo.text}"`}
        >
          {todo.text}
        </span>
      )}
      <Button
        variant="ghost"
        size="sm"
        className={styles.removeBtn}
        onClick={() => onRemove(todo.id)}
        aria-label={`Remove "${todo.text}"`}
      >
        ×
      </Button>
    </li>
  );
}
