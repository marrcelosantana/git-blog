import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostDetailCard } from "../../components/PostDetailCard";
import { Post } from "../../models/Post";
import { api } from "../../services/api";
import { PostDetailContainer, PostDetailContent } from "./styles";

type PostParams = {
  id: string;
};

export function PostDetail() {
  const { id } = useParams<PostParams>();

  const [data, setData] = useState<Post>();

  async function loadPostData() {
    api
      .get(`/repos/marrcelosantana/git-blog/issues/${id}`)
      .then((response) => setData(response.data));
  }

  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <PostDetailContainer>
      <PostDetailCard post={data} />
      <PostDetailContent>{data?.body}</PostDetailContent>
    </PostDetailContainer>
  );
}
