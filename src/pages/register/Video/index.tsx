import React, { useEffect, useState, ReactElement } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import { FormField } from '../../../components/FormField';
import { useForm } from '../../../hooks/useForm';
import { Button, ButtonChangePage } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

const RegisterVideo = (): ReactElement => {
  const initialValues = { title: '', url: '', categoria: '' };
  const { formValues, handleChangeForm } = useForm(initialValues);
  const [categories, setCategories] = useState([{ name: '', id: 9999 }]);
  const history = useHistory();

  useEffect(() => {
    categoriesRepository.getAll().then(async (categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <BaseTemplate>
      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={handleSubmitForm}>
        <FormField type="input" label="Título" name="title" value={formValues.title} onChange={handleChangeForm} />
        <FormField type="input" label="URL" name="url" value={formValues.url} onChange={handleChangeForm} />
        <FormField
          type="text"
          label="Categoria"
          name="categoria"
          value={formValues.categoria}
          onChange={handleChangeForm}
          suggestions={categories.map((category) => category.name)}
        />
        <Button aria-label="Cadastrar">Cadastrar</Button>
      </form>
      <ButtonChangePage as={Link} to="/cadastro/categoria">
        Cadastrar Categoria >
      </ButtonChangePage>
    </BaseTemplate>
  );
  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const categoryFound = categories.find(
      (category) => category.name.toUpperCase() === formValues.categoria?.toUpperCase(),
    );
    const categoriaId = categoryFound ? categoryFound.id : undefined;
    const serializedFormValues = { ...formValues, categoriaId };
    if (categoriaId)
      videosRepository.create(serializedFormValues).then(() => {
        history.push('/');
      });
    if (!categoriaId) alert('Categoria inexistente');
  }
};

export default RegisterVideo;
