import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  height: 66px;
  width: 66px;
  margin-right: 10px;

  @media all and (min-width: 768px) {
    height: 58px;
    width: 58px;
    margin-right: 50px;
  }
`;