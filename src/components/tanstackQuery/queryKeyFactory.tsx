import {
  createQueryKeys,
  mergeQueryKeys,
} from "@lukemorales/query-key-factory";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "../../mocks/handlers";
import { Button } from "yoso-ui";
import { Todo } from "../../mocks/model/todos";
import { PostDetail, PostList } from "../../mocks/model/posts";

const getTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`);
  return response.json();
};

const getPostList = async (): Promise<PostList> => {
  const response = await fetch(`${baseUrl}/posts`);
  return response.json();
};

const getPostDetail = async (id: number): Promise<PostDetail> => {
  const response = await fetch(`${baseUrl}/posts/${id}`);
  return response.json();
};

export const todos = createQueryKeys("todos", {
  all: null,
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => getTodos(),
  }),
});

const posts = createQueryKeys("posts", {
  list: {
    queryKey: null,
    queryFn: () => getPostList(),
  },
  detail: (id: number) => [id],
});

const queries = mergeQueryKeys(todos, posts);

export function useGetTodos(userId: string) {
  return useQuery(queries.todos.detail(userId));
}

export function useGetPostList() {
  return useQuery<PostList, Error, PostList>({
    ...queries.posts.list,
    queryFn: getPostList,
  });
}

export function useGetPostDetail(id: number) {
  return useQuery<PostDetail, Error, PostDetail>({
    ...queries.posts.detail(id),
    queryFn: () => getPostDetail(id),
  });
}

const QueryKeyFactory = () => {
  const { data: posts } = useGetPostList();
  const { data: postDetail } = useGetPostDetail(1);

  console.log(postDetail);

  const queryClient = useQueryClient();

  return (
    <div>
      <p>
        Query Key Factory란 Query Key를 생성하는 Factory를 만들어 사용하는
        case로, feature 단위로 Query Key Factory의 단위를 나누어 사용하는 것이,
        유지보수나 사용성에 있어 좋다.
      </p>

      <pre className="bg-gray-100 p-2 rounded-md">
        {`
        const userKeys = {
          default: ["user"] as const,
          list: () => [...userKeys.default, "list"] as const,
          details: () => [...userKeys.default, "detail"] as const,
          detail: (userId: number) => [...userKeys.details(), userId] as const,
        };

        export const useGetUserDetail = (userId: number) => {
          const context = useQuery<UserDetail, Error>({
          // query key factory 활용
          queryKey: userKeys.detail(userId),
          queryFn: async () => {
          const result = await getUserDetail(userId);
            return result.data;
          },
          });
          return context;
        };

        ...
        // query key가 쓰이는 곳에서 다 사용 가능
        queryClient.invalidateQueries(userKeys.default);
        `}
      </pre>

      <a href="https://www.youtube.com/watch?v=nkXIpGjVxWU&t=1185s">
        참고 영상
      </a>
      {posts?.map((post) => (
        <div
          key={post.id}
          onClick={() => {
            console.log(postDetail);
          }}
        >
          {post.title}
        </div>
      ))}
      <br />
      <Button
        onClick={() =>
          // invalidate all the detail queries
          queryClient.invalidateQueries({ queryKey: queries.todos.detail._def })
        }
      >
        invalidateQueries
      </Button>
    </div>
  );
};

export default QueryKeyFactory;
