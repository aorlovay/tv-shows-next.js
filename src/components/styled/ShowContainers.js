import styled from "styled-components";

export const ShowContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderContainer = styled.header`
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 15px 67px;

  @media all and (min-width: 768px) {
    flex: 1;
    margin-top: 0px;
    padding: 100px 100px 87px;
  }
`;

export const HeaderContainerInfoImage = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media all and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 50px;
    padding-top: 30px;
    width: 44%;
  }

  @media all and (min-width: 1320px) {
    justify-content: flex-start;
    margin-left: 50px;
    margin-right: 235px;
    padding-top: 30px;
  }
`;

export const InfoContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  padding: 43px 15px;

  @media all and (min-width: 768px) {
    flex: 1;
    gap: 50px;
    flex-direction: row;
    padding: 106px 100px;
  }
`;

export const InfoContainerMainDivide = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const InfoContainerSmall = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.cast ? "76px 1fr" : "1fr")};
  align-items: ${(props) => (props.cast ? "center" : '' )};

  @media all and (min-width: 768px) {
    grid-template-columns: ${(props) => (props.cast ? "1fr 3fr" : "1fr 1fr")};
    border-bottom: 1px solid #000;
    align-items: center;
    padding: ${(props) => (props.cast ? "14px 0" : "30px 0")};
  }

  @media all and (min-width: 1041px) {
    grid-template-columns: ${(props) => (props.cast ? "1fr 3fr" : "1fr 2fr")};
  }
`;

export const ShowInfoContainer = styled.div`
  display: grid;
  gap: 38px;
  grid-template-columns: 1fr 1fr;
  padding-top: 12px;

  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-top: 0;
  }
`;

export const StarringContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;

  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const InfoCastContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media all and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;