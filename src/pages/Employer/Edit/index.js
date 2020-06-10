import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { MdCheck, MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import history from '../../../services/history';
import Input from '../../../components/Input';

import { Container, ContentHeader, ContainerForm } from './styles';

export default function Edit(props) {
  const ref = useRef(null);
  const { employe } = props.location.state;

  async function handleSubmit(data) {
    try {
      const response = await api.put(`/employers-edit/${employe._id}`, data);
      if (response.data) {
        toast.success(`Registro editado com sucesso !`);
        history.push('employer-list');
      }
    } catch (error) {
      toast.error('Ocorreu um erro !');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={ref} initialData={employe}>
        <ContentHeader>
          <div>
            <span>Editando funcionário</span>
          </div>
          <div>
            <button type="submit">
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
