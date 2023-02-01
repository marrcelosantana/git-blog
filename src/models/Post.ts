export interface Post {
  id: number;
  html_url: string;
  title: string;
  body: string;
  created_at: string;
  number: number;

  user: {
    id: number;
    login: string;
  };

  comments: number;
}
