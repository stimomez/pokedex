import { ChangeEvent, useState } from 'react';

interface FormState {
  valueSearch: string;
}

export const useForm = (initialForm: FormState) => {
  const [formState, setFormSate] = useState<FormState>(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormSate({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormSate(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
