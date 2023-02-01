import { Post } from "./Post";

export interface Repository {
  total_count: number;
  items: Post[];
}
