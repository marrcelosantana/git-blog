import { Post } from "../../models/Post";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { PostCardContainer, PostCardContent } from "./styles";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to={`/post-detail/${post.number}`}>
      <header>
        <p>{post.title}</p>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>

      <PostCardContent>{post.body}</PostCardContent>
    </PostCardContainer>
  );
}
