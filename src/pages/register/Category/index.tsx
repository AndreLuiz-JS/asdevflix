import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';

interface FormValues {
  id: number;
  name: string;
  description: string;
  color: string;
}

const RegisterCategory = () => {
  const initialFormValues: FormValues = {
    id: 0,
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([] as FormValues[]);
  const [formValues, setFormValues] = useState(initialFormValues);
  return (
    <BaseTemplate>
      <h1>Cadastro de Categoria</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newCategory = { ...formValues, id: categories.length };
          setCategories([...categories, newCategory]);
        }}
      >
        <FormField label="Nome" type="text" value={formValues.name} name="name" onChange={handleChangeForm} />

        <FormField
          label="Descrição"
          type="textarea"
          value={formValues.description}
          name="description"
          onChange={handleChangeForm}
        />

        <FormField label="Cor" type="color" value={formValues.color} name="color" onChange={handleChangeForm} />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category) => {
          return <li key={category.id}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </BaseTemplate>
  );

  function setValue(key: string, value: string) {
    setFormValues({ ...formValues, [key]: value });
  }

  function handleChangeForm(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.getAttribute('name') || '', e.target.value);
  }
};

export default RegisterCategory;
