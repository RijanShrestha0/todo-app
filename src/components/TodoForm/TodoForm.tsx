import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './TodoForm.module.css';

type TodoFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
};

export function TodoForm({
  value,
  onChange,
  onSubmit,
  placeholder = 'What needs to be done?',
}: TodoFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        aria-label="New todo"
      />
      <Button type="submit" variant="primary" disabled={!value.trim()}>
        Add
      </Button>
    </form>
  );
}
