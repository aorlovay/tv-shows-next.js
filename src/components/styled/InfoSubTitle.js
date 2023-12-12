import styled from "styled-components";

export const InfoSubTitle = styled.p`
  font-family: "MT-Arial", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.333em;
  letter-spacing: 0.01em;
  display: flex;
  align-items: ${(props) => (props.cast ? "center" : "flex-start")};

  @media all and (min-width: 768px) {
    font-size: 20px;
    line-height: 1,5em;
    margin-bottom: 0;
  }
`;
