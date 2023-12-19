import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #ebebeb;
  padding: 29px 15px 65px;

  @media all and (min-width: 768px) {
    width: 100%;
    padding: 100px 100px 291px;
    margin-top: 0;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 15px;

  @media all and (min-width: 768px) {
    margin: -134px 100px 0;
  }
`;