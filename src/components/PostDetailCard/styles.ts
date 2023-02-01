import styled from "styled-components";

export const PostDetailCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: calc((-9.25rem - 1rem) / 2);
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 414px) {
    margin-top: -4rem;
  }
`;

export const PostDetailCardHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;

    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};

    & > a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 160%;
    }
  }
`;

export const InfoList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ${(props) => props.theme.breakpoints.sm} {
    & {
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`;
