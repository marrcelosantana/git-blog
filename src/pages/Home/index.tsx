import { useContext, useEffect } from "react";
import { PostCard } from "../../components/PostCard";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "../../components/SearchForm";
import { UserContext } from "../../contexts/UserContext";
import { Post } from "../../models/Post";

import { HomeContainer, PostsContainer } from "./styles";

export function Home() {
  const { loadPosts, repository } = useContext(UserContext);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchForm repository={repository} />

      <PostsContainer>
        {repository?.items.map((post: Post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </PostsContainer>
    </HomeContainer>
  );
}
