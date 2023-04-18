import styled from 'styled-components';

export const TransactionTable = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 340px;
  margin: 20px auto;
  
`;
export const TrBody = styled.tr`
  :nth-of-type(odd) {
    background: #fff;
  }
  :nth-of-type(even) {
    background: #f7f7f7;
  }
`;
export const Th = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #2596be;
  border: 1px solid #dddddd;
`;
export const Td = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: center;
`;