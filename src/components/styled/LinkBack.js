import styled from "styled-components";

export const LinkBack = styled.p`
  font-family: "MT-Arial", sans-serif;
  color: #8c8c8c;
  font-size: 11px;
  line-height: 1.333em;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  @media all and (min-width: 768px) {
    font-size: 14px;
    line-height: 1em;
  }

  &:hover {
    color: #333; 
  }
`;
