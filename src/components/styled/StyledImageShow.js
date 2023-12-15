import styled from "styled-components";

export const StyledImageShow = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledImageShowContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 290px;
  aspect-ratio: 290 / 426;

  @media all and (min-width: 768px) {
    max-width: 272px;
    aspect-ratio: 272 / 400;
  }
`;
