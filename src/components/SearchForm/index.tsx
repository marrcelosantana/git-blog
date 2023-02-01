import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Repository } from "../../models/Repository";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer, SearchFormHeader, SearchInput } from "./styles";

interface SearchFormProps {
  repository?: Repository;
}

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

const searchFormSchema = zod.object({
  query: zod.string(),
});

export function SearchForm({ repository }: SearchFormProps) {
  const { loadPosts } = useContext(UserContext);

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInputs) {
    await loadPosts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchFormHeader>
        <span className="title">Publicações</span>
        <span className="publications">
          {repository?.total_count} publicações
        </span>
      </SearchFormHeader>

      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SearchFormContainer>
  );
}
