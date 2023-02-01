import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 27.5%;

  @media (max-width: 414px) {
    margin: 0 10%;
  }
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 2rem;

  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
