export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type AddTodoRequestBody = Omit<Todo, "id" | "completed">;

export const todos: Todo[] = [
  { id: 1, title: "밥먹기", completed: false },
  { id: 2, title: "커피마시기", completed: false },
  { id: 3, title: "커피마시기", completed: false },
];
