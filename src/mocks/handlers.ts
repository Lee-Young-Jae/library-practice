import { http, HttpResponse } from "msw";
import { AddTodoRequestBody, Todo, todos } from "./model/todos";
import { postDetail, postList } from "./model/posts";

export const baseUrl = "http://localhost:3000";

const generateId = () => ~~Math.random().toString(36).substring(2, 15);

export const handlers = [
  http.get(`${baseUrl}/todos`, () => {
    return HttpResponse.json(todos, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
  http.post<{}, AddTodoRequestBody, Todo>(
    `${baseUrl}/todos`,
    async ({ request }) => {
      const { title } = await request.json();
      const newTodo = { id: generateId(), title, completed: false };
      todos.push(newTodo);
      return HttpResponse.json(newTodo, { status: 201 });
    }
  ),
  http.get(`${baseUrl}/posts`, () => {
    return HttpResponse.json(postList, { status: 201 });
  }),
  http.get(`${baseUrl}/posts/:id`, ({ params }) => {
    const { id } = params;

    if (isNaN(Number(id))) {
      return HttpResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    const post = postDetail.find((post) => post.id === Number(id));

    if (!post) {
      return HttpResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return HttpResponse.json(post, { status: 201 });
  }),
];
