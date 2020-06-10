import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { MdCheck, MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import history from '../../../services/history';
import Input from '../../../components/Input';

import { Container, ContentHeader, ContainerForm } from './styles';

function New() {
  const ref = useRef(null);

  async function handleSubmit(data) {
    try {
      ref.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigátorio'),
        phone: Yup.string('Digite um numero de telefone valido').required(
          'Campo obrigátorio'
        ),
        age: Yup.string('Digite um numero de telefone valido').required(
          'Campo obrigátorio'
        ),
      });
      await schema.validate(data, { abortEarly: false });

      const response = await api.post('employers-new', data);

      if (response.data) {
        toast.success('Salvo com successo');
        history.push('/employer-list');
      } else {
        toast.error('Ocorreu um erro !');
      }
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        ref.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={ref}>
        <ContentHeader>
          <div>
            <span>Novo funcionário</span>
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              <MdCheck size={20} color="#fff" />
              <span>SALVAR</span>
            </button>
            <button
              type="button"
              onClick={() => history.push('/employer-list')}
            >
              <MdClose size={20} color="#fff" />
              <span>CANCELAR</span>
            </button>
          </div>
        </ContentHeader>
        <ContainerForm>
          <div>
            <span>Nome</span>
            <Input name="name" type="text" placeholder="Digite o nome" />
            <span>Telefone</span>
            <Input name="phone" type="text" placeholder="Digite o telefone" />
            <span>Idade</span>
            <Input name="age" type="text" placeholder="Digite a idade" />
          </div>
        </ContainerForm>
      </Form>
    </Container>
  );
}

export default New;
