import { TodoForm, TodoList } from '../components';
import { useTodos, useTodoFilters, useTodoForm } from '../hooks';

const emptyMessages: Record<string, string> = {
  all: 'No todos yet. Add one above!',
  active: 'No active todos.',
  completed: 'No completed todos.',
};

export function TodosPage() {
  const { add, toggle, remove, edit } = useTodos();
  const { filteredTodos, filter } = useTodoFilters();
  const { value, handleChange, handleSubmit } = useTodoForm(add);

  return (
    <>
      <TodoForm
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TodoList
        todos={filteredTodos}
        onToggle={toggle}
        onRemove={remove}
        onEdit={edit}
        emptyMessage={emptyMessages[filter]}
      />
    </>
  );
}
