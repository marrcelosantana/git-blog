import {
  ArrowLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { Post } from "../../models/Post";

import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  InfoList,
  PostDetailCardContainer,
  PostDetailCardHeader,
} from "./styles";

interface PostDetailCardProps {
  post?: Post;
}

export function PostDetailCard({ post }: PostDetailCardProps) {
  return (
    <PostDetailCardContainer>
      <PostDetailCardHeader>
        <Link to="/" className="header-content">
          <ArrowLeft size={18} />
          <span>VOLTAR</span>
        </Link>

        <a href={post?.html_url} className="header-content" target="_blank">
          <span>VER NO GITHUB</span>
          <ArrowSquareOut
            size={18}
            weight="bold"
            className="teste"
            style={{ marginBottom: "4px" }}
          />
        </a>
      </PostDetailCardHeader>

      <h2>{post?.title}</h2>

      <InfoList>
        <li>
          <GithubLogo size={22} weight="fill" color="#3A536B" />
          <span>{post?.user.login}</span>
        </li>

        <li>
          <Calendar size={22} color="#3A536B" weight="fill" />
          {post?.created_at && (
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          )}
        </li>

        <li>
          <ChatCircle size={22} color="#3A536B" weight="fill" />
          <span>{post?.comments} comentário(s)</span>
        </li>
      </InfoList>
    </PostDetailCardContainer>
  );
}
