import styled from 'styled-components';

export const EventText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f4f4f4;
  border: 1px dashed #dadada;
  border-radius: 10px;
  height: 50px;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Flex = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr 1fr;
  margin-top: 30px;
  font-size: 24px;
  div {
    display: flex;
  }
`;

export const Credit = styled.div`
  margin-right: 10px;
`;

export const InfoTitle = styled.div`
  color: #555555;
  margin-right: 25px;
`;
