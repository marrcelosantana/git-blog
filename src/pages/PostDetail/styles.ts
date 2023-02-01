import styled from "styled-components";

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 27.5%;

  @media (max-width: 414px) {
    margin: 0 10%;
  }
`;

export const PostDetailContent = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 160%;
  font-weight: 700;
`;
