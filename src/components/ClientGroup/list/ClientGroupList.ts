import styled from 'styled-components';

export const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const HeaderSection = styled.div`
  display: flex;
  gap: 22px;
`;

export const TaxtContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  margin: 1rem 0 1.5rem 0;
`;

export const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 2fr;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    gap: 30px;
  }
  div:nth-child(3) {
    justify-content: flex-start;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GroupList = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 1fr 4fr 2fr;
  height: 82px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 18px;
  span,
  div {
    display: flex;
    justify-content: center;
    color: #777777;
  }
  span:nth-child(3) {
    justify-content: flex-start;
    font-weight: 700;
    font-size: 21px;
    color: #444444;
  }
`;

export const VerticalHr = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(151, 151, 151, 1);
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const ListCount = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid #979797;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  left: 0;
  background-color: white;
  width: 100%;
  div {
    padding: 5px 10px;
    border-top: 1px solid #dfdfdf;
  }
`;

export const NoneSvg = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 0px 0px;
`;
