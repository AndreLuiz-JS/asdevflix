import React, { useState, useEffect, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import { FormField } from '../../../components/FormField';
import { Button, ButtonDelete, ButtonChangePage } from '../../../components/Button';
import { useForm, FormValues } from '../../../hooks/useForm';
import { BACKEND_URL } from '../../../config';

const RegisterCategory = (): ReactElement => {
  const initialFormValues: FormValues = {
    id: 99999,
    name: '',
    description: '',
    color: '#141414',
    hasVideos: false,
  };
  const { clearForm, formValues, handleChangeForm } = useForm(initialFormValues);
  const [categories, setCategories] = useState([] as FormValues[]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/categorias`).then(async (promise) => {
      const categories = await promise.json();
      const serializedCategories = categories.map((category: FormValues) => {
        const serializedCategory = category;
        fetch(`${BACKEND_URL}/videos/?categoriaId=${category.id}`).then((promise) => {
          promise.json().then((data) => {
            serializedCategory.hasVideos = data.length !== 0;
          });
        });
        return serializedCategory;
      });

      setTimeout(() => {
        setCategories(serializedCategories);
      }, 100);
    });
  }, []);

  return (
    <BaseTemplate>
      <h1>Cadastro de Categoria</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newCategory = { ...formValues };
          setCategories([...categories, newCategory]);
          fetch(`${BACKEND_URL}/categorias`, { method: 'POST', body: JSON.stringify(formValues) }).then(
            async (promise) => {
              const data = await promise.json();
              const { id } = data;
              const newCategory = { ...formValues, id };
              setCategories([...categories, newCategory]);
            },
          );
          clearForm();
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

        <Button aria-label="Cadastrar">Cadastrar</Button>
      </form>

      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              {category.name}
              {category.hasVideos === false && (
                <ButtonDelete onClick={() => handleDeleteCategory(category.id)}>apagar</ButtonDelete>
              )}
            </li>
          );
        })}
      </ul>

      <ButtonChangePage as={Link} to="/">
        {'< Ir para home'}
      </ButtonChangePage>
    </BaseTemplate>
  );
  function handleDeleteCategory(id: number | undefined) {
    if (id)
      if (window.confirm('Esta ação não pode ser desfeita, continuar?')) {
        fetch(`${BACKEND_URL}/categorias/${id}`, { method: 'DELETE' }).then(async (promise) => {
          const response = await promise;
          if (response.status === 200) setCategories(categories.filter((category) => category.id !== id));
        });
      }
  }
};

export default RegisterCategory;
