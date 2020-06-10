import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  background: #7159c1;
`;
export const Logo = styled(Link)`
  margin: 0 30px 0 0;

  img {
    max-width: 50px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  nav {
    display: flex;
    align-items: center;

    a {
      color: #fff;
      margin: 0 10px;
      font-weight: bold;

      &:hover {
        color: #333;
      }
    }
  }
  aside {
    display: flex;
    align-items: center;

    button {
      color: #fff;
      width: 50px;
      height: 50px;
      font-size: 16px;
      font-weight: bold;
      background: none;
      border: 0;
      border-radius: 25px;
      transition: background 0.2s;

      &:hover {
        background: #333;
      }
    }
  }
`;
