import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 10;
  margin-top: calc((-9.25rem - 2rem) / 2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 414px) {
    margin-top: -4rem;
  }
`;

export const ProfileCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
    }

    svg {
      margin-bottom: 0.1875rem;
      color: ${(props) => props.theme.blue};
    }
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 160%;
  word-break: break-all;
`;

export const InfoList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  font-size: 12px;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  ${(props) => props.theme.breakpoints.sm} {
    & {
      margin-top: 1rem;
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`;
