import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchFormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};

    @media (max-width: 414px) {
      font-size: 1rem;
    }
  }

  .publications {
    line-height: 160%;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const SearchInput = styled.input`
  height: 3.125rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  color: ${(props) => props.theme["base-text"]};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
