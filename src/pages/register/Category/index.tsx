import React, { useState, useEffect, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import { FormField } from '../../../components/FormField';
import { Button } from '../../../components/Button';

interface FormValues {
  id: number;
  name: string;
  description: string;
  color: string;
}

const RegisterCategory = (): ReactElement => {
  const initialFormValues: FormValues = {
    id: 0,
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([] as FormValues[]);
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categorias'
      : 'https://asdevflix.glitch.me/categorias';
    fetch(URL).then(async (promise) => {
      const data = await promise.json();
      setCategories([...data]);
    });
  }, []);

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

        <Button as="a" aria-label="Cadastrar">
          Cadastrar
        </Button>
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
