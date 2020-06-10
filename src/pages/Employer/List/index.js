import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import historiy from '../../../services/history';

import api from '../../../services/api';

import MenuActions from '../../../components/MenuActions';
import { Container, ContentHeader, ContentList, ContainerLoad } from './styles';

function List() {
  const [employer, SetEmployer] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEmployers() {
      setLoading(true);
      const response = await api.get('/employers');
      SetEmployer(response.data);
      setLoading(false);
    }
    loadEmployers();
  }, []);

  return (
    <Container>
      <ContentHeader>
        <span>Gerenciando funcionários</span>
        <button type="button" onClick={() => historiy.push('/employer-new')}>
          <MdAdd size={20} color="#fff" />
          <span>CADASTRAR</span>
        </button>
      </ContentHeader>
      {loading ? (
        <ContainerLoad>
          <span>Carregando...</span>
        </ContainerLoad>
      ) : (
        <ContentList>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Idade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {employer.map((employe) => (
              <tr key={employe._id}>
                <td>{employe.name}</td>
                <td>{employe.phone}</td>
                <td>{employe.age}</td>
                <td>
                  <MenuActions employer={employe} />
                </td>
              </tr>
            ))}
          </tbody>
        </ContentList>
      )}
    </Container>
  );
}

export default List;
