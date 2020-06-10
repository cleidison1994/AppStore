import styled from 'styled-components';

export const Container = styled.div`
  max-width: 990px;
  margin: 50px auto;
  background: #eee;
  border-radius: 4px;
  padding: 10px 10px;
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  > span {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  button {
    display: flex;
    align-items: center;
    background: #7159c1;
    border: 0;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;
export const ContentList = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-collapse: separate !important;
  border-spacing: 0 20px !important;

  thead th {
    text-align: left;
    padding: 0 10px;
    color: #333;

    &:last-child {
      text-align: center;
    }
  }
  tbody td {
    background: #fff;
    height: 50px;
    font-size: 14px;
    padding: 0 10px;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      text-align: center;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

export const ContainerLoad = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #eee;

  span {
    font-size: 22px;
    color: #7159c1;
    margin: 10px 0;
    font-weight: bold;
  }
`;
