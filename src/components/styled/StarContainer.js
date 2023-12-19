import styled from "styled-components";

export const StarContainer = styled.div`
  display: ${(props) => (props.showratingmobile ? "flex" : "none")};
  align-items: center;
  gap: 2px;
  margin: 25px 0 29px;

  @media all and (min-width: 768px) {
    display: ${(props) => (props.showrating ? "flex" : "none")};
    margin: 13px 0 17px;
  }
`;