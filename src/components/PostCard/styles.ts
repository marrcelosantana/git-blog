import styled from "styled-components";

import { Link } from "react-router-dom";

export const PostCardContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2rem;

    p {
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.25rem;
      width: 60%;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const PostCardContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
