import { useState, useCallback } from 'react';

export function useTodoForm(onSubmit: (text: string) => void) {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(value);
      setValue('');
    },
    [value, onSubmit]
  );

  const reset = useCallback(() => setValue(''), []);

  return { value, handleChange, handleSubmit, reset };
}
