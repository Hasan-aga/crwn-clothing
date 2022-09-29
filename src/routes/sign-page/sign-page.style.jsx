import styled from "styled-components";

export const SignPageComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px 40px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
