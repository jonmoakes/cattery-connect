import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 125px;
  padding-bottom: 100px;
  @media screen and (max-width: 600px) {
    padding-bottom: 50px;
  }
`;

export const NoHeaderFooterContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;
