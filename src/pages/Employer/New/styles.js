import styled from 'styled-components';

export const Container = styled.div`
  max-width: 990px;
  margin: 50px auto;
  background: #eee;
  border-radius: 4px;
  padding: 10px 20px;

  form {
    width: 100%;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    > span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  button {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px 5px;
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
  }
`;
export const ContainerForm = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px 10px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 16px;
      font-weight: bold;
      margin: 5px 0;
    }

    input {
      height: 35px;
      padding: 5px 15px;
      font-size: 16px;
    }
  }
`;
