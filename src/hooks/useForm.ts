import React, { useState } from 'react';

export interface FormValues {
  id?: number;
  name?: string;
  description?: string;
  color?: string;
  hasVideos?: boolean;
  title?: string;
  categoria?: string;
  url?: string;
}

interface UseFormReturn {
  formValues: FormValues;
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  clearForm: () => void;
}

const useForm = (initialFormValues: FormValues): UseFormReturn => {
  const [formValues, setFormValues] = useState(initialFormValues);

  function setValue(key: string, value: string) {
    setFormValues({ ...formValues, [key]: value });
  }

  function handleChangeForm(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  function clearForm() {
    setFormValues(initialFormValues);
  }
  return { formValues, handleChangeForm, clearForm };
};

export { useForm };
