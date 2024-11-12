export type Post = {
  id: number;
  title: string;
};

export type PostList = Post[];

export type PostDetail = {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
};

export const postList: PostList = [
  { id: 1, title: "첫번째 게시글" },
  { id: 2, title: "두번째 게시글" },
  { id: 3, title: "세번째 게시글" },
];

export const postDetail: PostDetail[] = [
  {
    id: 1,
    title: "첫번째 게시글",
    content: "첫번째 게시글 내용",
    thumbnail: "https://example.com/thumbnail.jpg",
  },
  {
    id: 2,
    title: "두번째 게시글",
    content: "두번째 게시글 내용",
    thumbnail: "https://example.com/thumbnail.jpg",
  },
  {
    id: 3,
    title: "세번째 게시글",
    content: "세번째 게시글 내용",
    thumbnail: "https://example.com/thumbnail.jpg",
  },
];
