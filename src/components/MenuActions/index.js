import React, { useState } from 'react';
import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '../../services/history';
import api from '../../services/api';

import { Container, Badge, ContainerOptions } from './styles';

function MenuActions({ employer }) {
  const [visible, setVisible] = useState(false);
  function handleVisible() {
    setVisible(!visible);
  }
  function handleEdit() {
    history.push(`/employer-edit`, { employe: employer });
  }
  async function handleDelete() {
    try {
      const confirm = window.confirm('Tem certeza que deseja deletar ?');
      if (confirm) {
        const response = await api.delete(`employers-delete/${employer._id}`);
        if (response.data) {
          toast.success('Registro deletado com sucesso !');
          history.push('employer-list');
        }
      }
    } catch (error) {
      toast.error('Ocorreu um errro !');
    }
  }

  return (
    <Container>
      <Badge onClick={handleVisible}>
        <MdMoreHoriz size={26} color="#333" />
      </Badge>
      <ContainerOptions visible={visible}>
        <div>
          <button type="button" onClick={handleEdit}>
            <MdEdit size={20} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDelete}>
            <MdDelete size={20} color="#DE3B3B" />
            <span>Deletar</span>
          </button>
        </div>
      </ContainerOptions>
    </Container>
  );
}

export default MenuActions;
