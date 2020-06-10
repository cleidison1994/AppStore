import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Logo to="/">
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="logo"
            />
          </Logo>
          <Link to="/employer-list">Funcionário</Link>
          <Link to="/">Ações</Link>
          <Link to="/">Configurações</Link>
        </nav>
        <aside>
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
