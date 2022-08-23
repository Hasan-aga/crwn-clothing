import styled from "styled-components";

export const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoughtProductsList = styled.div`
  background-color: #fff;
  border-bottom: 1px #999 solid;
  padding: 10px 20px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
  img {
    width: 40px;
  }
`;
