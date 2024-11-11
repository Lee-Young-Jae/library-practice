import { http, HttpResponse } from "msw";
import { AddTodoRequestBody, Todo, todos } from "./model/todos";

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
];
