import styled from "styled-components";

export const TitleMain = styled.h3`
  font-family: "MT-Arial", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: 0.017em;
  margin: ${(props) => (props.homemobile ? "42px 0 21px" : "0 0 12px")};

  @media all and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.167em;
    margin: 0 0 46px;
  }
`;
