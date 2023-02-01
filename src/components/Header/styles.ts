import styled from "styled-components";

import headerBackground from "../../assets/header-background.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
